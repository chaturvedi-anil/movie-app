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
