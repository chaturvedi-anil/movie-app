import { Router } from "express";
import { authorize, isAuthenticated } from "../../middlewares/auth.middleware";
import {
  listMovies,
  getmyMovies,
  createMovie,
  updateMovie,
  getPendingList,
  approveMovie,
  deleteMovie,
} from "./movie.controller";
import { validateRequest } from "../../middlewares/validate.middleware";
import { movieSchema } from "./movie.schema";
const movieRouter = Router();

// user and admin routes
movieRouter.get("/my", isAuthenticated, getmyMovies);
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
movieRouter.get("/", isAuthenticated, authorize(["ADMIN"]), listMovies);
movieRouter.put(
  "/:id/approve",
  isAuthenticated,
  authorize(["ADMIN"]),
  approveMovie
);

export default movieRouter;
