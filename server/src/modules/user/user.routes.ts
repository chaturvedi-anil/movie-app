import { Router } from "express";
import { getProfile, list } from "./user.controller";
import { authorize, isAuthenticated } from "../../middlewares/auth.middleware";

const userRouter = Router();

userRouter.get("/profile", isAuthenticated, getProfile);
userRouter.get("/", isAuthenticated, authorize(["ADMIN"]), list);

export default userRouter;
