import jwt from "jsonwebtoken";
import { ENV } from "../configs/env";
import ErrorHandler from "./error-handler";

type TokenPayload = { id: number; role: string };

export const signToken = (payload: TokenPayload) => {
  if (!ENV.JWT_SECRET) {
    throw new ErrorHandler(
      "JWT_SECRET is not defined in the environment variables",
      500
    );
  }
  return jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRES_IN || "1d",
  });
};

export const verifyToken = (token: string) => {
  if (!ENV.JWT_SECRET) {
    throw new ErrorHandler(
      "JWT_SECRET is not defined in the environment variables",
      500
    );
  }
  return jwt.verify(token, ENV.JWT_SECRET);
};
