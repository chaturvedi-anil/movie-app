import { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject } from "zod";
import ErrorHandler from "../utils/error-handler";
import { logger } from "../utils/logger";

export const validateRequest =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    logger.error(`Validation error : ${result}`);

    // Replace req.body with parsed data
    if (result.success) {
      req.body = result.data;
      return next();
    }

    if (result.error instanceof ZodError) {
      const errorMessage = result.error.issues.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      return next(new ErrorHandler(JSON.stringify(errorMessage), 400));
    }

    // fallback if errors is not a ZodError
    return next(new ErrorHandler("Invalid request payload", 400));
  };
