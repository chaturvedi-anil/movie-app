import { Router } from "express";
import { validateRequest } from "../../middlewares/validate.middleware";
import { signupSchema } from "./auth.schemas";
const authRouter = Router();

authRouter.post("/signup", validateRequest(signupSchema));

export default authRouter;
