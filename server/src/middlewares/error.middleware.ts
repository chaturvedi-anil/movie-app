import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";
  let details;

  // ✅ Prisma known request errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        const field = err.meta?.target || "Field";
        message = `Duplicate value for ${field}`;
        statusCode = 400;
        break;
      case "P2003":
        message = "Foreign key constraint failed";
        statusCode = 400;
        break;
      case "P2000":
        message = "Input value too long for database column";
        statusCode = 400;
        break;
      case "P2025":
        message = "Record not found";
        statusCode = 404;
        break;
      default:
        message = "Database error";
        statusCode = 500;
        break;
    }
  }

  // ✅ Prisma validation error (invalid schema or data type)
  else if (err instanceof Prisma.PrismaClientValidationError) {
    message = "Invalid input data";
    statusCode = 400;
  }

  // ✅ JWT Errors
  else if (err.name === "JsonWebTokenError") {
    message = "Invalid token. Please login again.";
    statusCode = 401;
  } else if (err.name === "TokenExpiredError") {
    message = "Your token has expired. Please login again.";
    statusCode = 401;
  }

  // ✅ Zod validation errors
  else if (message === "Validation failed" && err.details) {
    details =
      typeof err.details === "string" ? JSON.parse(err.details) : err.details;
  }

  // ✅ Final error response
  const responsePayload: Record<string, any> = {
    success: false,
    message,
  };

  if (details) responsePayload.details = details;

  res.status(statusCode).json(responsePayload);
};
