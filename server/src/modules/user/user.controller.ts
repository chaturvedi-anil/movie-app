import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middlewares/async-catch.middleware";
import * as userService from "./user.service";

export const getProfile = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.id;
    const data = await userService.getUser(userId);

    res.status(200).json({
      success: true,
      data,
    });
  }
);
