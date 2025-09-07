import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middlewares/async-catch.middleware";
import * as authService from "./auth.service";

export const signup = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authService.signupUser(req.body);
    res.status(201).json({
      success: true,
      message: "Account created successfully",
      result,
    });
  }
);

export const login = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authService.loginUser(req.body);
    res.status(200).json({
      success: true,
      message: "LoggedIn Successfully",
      result,
    });
  }
);
