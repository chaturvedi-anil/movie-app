import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./modules/index.routes";
import { ErrorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cors());

// routes
app.use("/ping", (req, res) => res.status(200).send("pong"));
app.use("/api/v1/", router);

// error handler middleware
app.use(ErrorMiddleware);

export default app;
