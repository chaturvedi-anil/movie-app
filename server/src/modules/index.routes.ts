import express from "express";
import authRouter from "./auth/auth.routes";
import userRouter from "./users/user.routes";
import movieRouter from "./movies/movie.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/movies", movieRouter);

export default router;
