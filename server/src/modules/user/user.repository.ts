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
