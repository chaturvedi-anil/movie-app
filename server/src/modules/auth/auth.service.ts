import ErrorHandler from "../../utils/error-handler";
import { comparePassword, hashPassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";

import * as authRepository from "./auth.repository";

interface SignupInput {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
}

interface LoginInput {
  email: string;
  password: string;
}

export const signupUser = async ({
  name,
  email,
  password,
  role = "USER",
}: SignupInput) => {
  const data = { name, email, password, role };
  const isUserExisting = await authRepository.findUserByEmail(email);

  if (isUserExisting) {
    throw new ErrorHandler(`User with ${email} email already exists`, 400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await authRepository.createUser({
    ...data,
    password: hashedPassword,
  });

  const token = signToken({ id: user.id, role: user.role });
  return { user, token };
};

export const loginUser = async ({ email, password }: LoginInput) => {
  const isUserExisting = await authRepository.findUserByEmail(email);

  if (!isUserExisting) {
    throw new ErrorHandler(`Invalid email or password`, 401);
  }

  const isPasswordVerified = comparePassword(password, isUserExisting.password);
  if (!isPasswordVerified) {
    throw new ErrorHandler(`Invalid email or password`, 401);
  }

  const token = signToken({ id: isUserExisting.id, role: isUserExisting.role });
  return { token };
};
