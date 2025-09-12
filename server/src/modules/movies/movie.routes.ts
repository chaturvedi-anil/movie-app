import { Router } from "express";
import { authorize, isAuthenticated } from "../../middlewares/auth.middleware";
import {
  getAllMovies,
  getMyMovies,
  createMovie,
  updateMovie,
  getPendingList,
  approveMovie,
  deleteMovie,
  rejectMovie,
} from "./movie.controller";
import { validateRequest } from "../../middlewares/validate.middleware";
import { movieSchema } from "./movie.schema";
const movieRouter = Router();

// user and admin routes
movieRouter.get("/my", isAuthenticated, getMyMovies);
movieRouter.post(
  "/",
  isAuthenticated,
  validateRequest(movieSchema),
  createMovie
);
movieRouter.put(
  "/:id",
  isAuthenticated,
  validateRequest(movieSchema),
  updateMovie
);
movieRouter.delete("/:id", isAuthenticated, deleteMovie);

// admin routes
movieRouter.get(
  "/pending",
  isAuthenticated,
  authorize(["ADMIN"]),
  getPendingList
);
movieRouter.get("/", isAuthenticated, authorize(["ADMIN"]), getAllMovies);
movieRouter.put(
  "/:id/approve",
  isAuthenticated,
  authorize(["ADMIN"]),
  approveMovie
);

movieRouter.put(
  "/:id/reject",
  isAuthenticated,
  authorize(["ADMIN"]),
  rejectMovie
);

export default movieRouter;
