import express from "express";
import authRouter from "./auth/auth.routes";
const router = express.Router();

router.use("/auth", authRouter);
// router.use("/user");
// router.use("/movie");

export default router;
