import { Router } from "express";
import { validateRequest } from "../../middlewares/validate.middleware";
import { signupSchema } from "./auth.schemas";
import { signup } from "./auth.controller";
const authRouter = Router();

authRouter.post("/signup", validateRequest(signupSchema), signup);

export default authRouter;
