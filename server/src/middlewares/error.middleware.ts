import { NextFunction, Request, Response } from "express";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";
  let details;

  // CastError (invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    message = `Resource not found. Invalid: ${err.path}`;
    statusCode = 400;
  }

  // Duplicate key error (MongoDB)
  else if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate field: ${field}`;
    statusCode = 400;
  }

  // JWT errors
  else if (err.name === "JsonWebTokenError") {
    message = "Invalid token. Please login again.";
    statusCode = 401;
  } else if (err.name === "TokenExpiredError") {
    message = "Your token has expired. Please login again.";
    statusCode = 401;
  } else if (message === "Validation failed") {
    details = JSON.parse(err.details);
  }

  res.status(statusCode).json({
    success: false,
    message,
    details,
  });
};
