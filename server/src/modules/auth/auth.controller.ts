import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middlewares/async-catch.middleware";
import { signupUser } from "./auth.service";

export const signup = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = signupUser(req.body);
    res.status(201).json({
      success: true,
      message: "Account created successfully",
      result,
    });
  }
);
