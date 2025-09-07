import { prismaClient } from "../../configs/database";

export const findUserByEmail = (email: string) => {
  return prismaClient.user.findUnique({ where: { email } });
};

export const createUser = (data: {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
}) => {
  return prismaClient.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role ? data.role : "USER",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
};
