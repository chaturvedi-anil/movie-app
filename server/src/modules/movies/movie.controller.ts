import { NextFunction, Request, Response } from "express";
import { CatchAsyncRequest } from "../../middlewares/async-catch.middleware";
import * as movieService from "./movie.service";

export const createMovie = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user!.id;
    req.body.createdBy = userId;

    const movie = await movieService.createMovie(req.body);

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      movie,
    });
  }
);

export const getmyMovies = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user!.id;
    const movieList = await movieService.getmyMovies(userId);
    res.status(200).json({
      success: true,
      movieList,
    });
  }
);

export const updateMovie = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user!.id;
    const movieId = Number(req.params.id);

    const update = await movieService.updateMovie(userId, movieId, req.body);

    res.status(201).json({
      success: true,
      message: "Movie updated successfully",
      data: update,
    });
  }
);

export const deleteMovie = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user!.id;
    const movieId = Number(req.params.id);

    const isDeleted = await movieService.deleleMovie(userId, movieId);
    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });
  }
);

export const listMovies = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {}
);
export const getPendingList = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {
    const pendingList = await movieService.getPendingList();

    res.status(200).json({
      success: true,
      pendingList,
    });
  }
);

export const approveMovie = CatchAsyncRequest(
  async (req: Request, res: Response, next: NextFunction) => {}
);
