import { prismaClient } from "../../configs/database";

export const findUserById = (userId: number) => {
  return prismaClient.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
};

export const findAllUsers = () => {
  return prismaClient.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      movies: true,
      createdAt: true,
    },
  });
};
