import { Prisma } from "@prisma/client";
import { prismaClient } from "../../configs/database";
import { MovieInput } from "./movie.types";

export const createMovie = (data: MovieInput) => {
  const budgetDecimal = new Prisma.Decimal(data.budget);
  const boxOfficeDecimal = new Prisma.Decimal(data.boxOffice ?? "");
  return prismaClient.movie.create({
    data: { ...data, budget: budgetDecimal, boxOffice: boxOfficeDecimal },
  });
};

export const getmyMovies = (id: number) => {
  return prismaClient.movie.findMany({
    where: { createdBy: id, deletedAt: null },
  });
};

export const updateMovie = (
  userId: number,
  movieId: number,
  data: MovieInput
) => {
  const budgetDecimal = new Prisma.Decimal(data.budget);
  const boxOfficeDecimal = new Prisma.Decimal(data.boxOffice ?? "");

  return prismaClient.movie.update({
    where: { id: movieId, createdBy: userId },
    data: {
      ...data,
      budget: budgetDecimal,
      boxOffice: boxOfficeDecimal,
      createdBy: userId,
    },
  });
};

export const deleteMovie = (userId: number, movieId: number) => {
  return prismaClient.movie.update({
    where: {
      id: movieId,
      createdBy: userId,
      deletedAt: null,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
