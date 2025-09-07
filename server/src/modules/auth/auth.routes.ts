import { Router } from "express";
import { validateRequest } from "../../middlewares/validate.middleware";
import { loginSchema, signupSchema } from "./auth.schemas";
import { login, signup } from "./auth.controller";
const authRouter = Router();

authRouter.post("/signup", validateRequest(signupSchema), signup);
authRouter.post("/login", validateRequest(loginSchema), login);

export default authRouter;
