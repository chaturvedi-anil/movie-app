import * as movieRepository from "./movie.repository";
import { MovieInput } from "./movie.types";

export const createMovie = async (data: MovieInput) => {
  const movie = await movieRepository.createMovie(data);
  return movie;
};

export const getmyMovies = async (id: number) => {
  const movieList = await movieRepository.getmyMovies(id);
  return movieList;
};

export const updateMovie = async (
  userId: number,
  movieId: number,
  data: MovieInput
) => {
  const movie = await movieRepository.updateMovie(userId, movieId, data);

  return movie;
};

export const deleleMovie = async (userId: number, movieId: number) => {
  const isDeleted = await movieRepository.deleteMovie(userId, movieId);
  return isDeleted;
};

export const getPendingList = async () => {
  const pendingList = await movieRepository.getPendingList();
  return pendingList;
};

export const getAllMovies = async () => {
  const movies = await movieRepository.getAllMovies();
  return movies;
};

export const approveMovie = async (movieId: number) => {
  const approved = await movieRepository.approveMovie(movieId);
  return approved;
};

export const rejectMovie = async (movieId: number) => {
  const rejected = await movieRepository.rejectMovie(movieId);
  return rejected;
};
