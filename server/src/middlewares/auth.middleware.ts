import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "./async-catch.middleware";
import ErrorHandler from "../utils/error-handler";
import { verifyToken } from "../utils/jwt";

export const isAuthenticated = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new ErrorHandler("Unauthorized", 401);
    }

    const decoded = verifyToken(token);

    req.user = decoded;

    next();
  }
);

export const authorize = (roles: ("ADMIN" | "USER")[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new ErrorHandler("Unauthorized", 401);
    }
    if (!roles.includes(req.user?.role as any)) {
      throw new ErrorHandler("Forbidden", 403);
    }
    next();
  };
};
