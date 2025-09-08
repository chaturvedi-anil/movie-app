import { Router } from "express";
import { getProfile } from "./user.controller";

const userRouter = Router();

userRouter.get("/profile", getProfile);

export default userRouter;
