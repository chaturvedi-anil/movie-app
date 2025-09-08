import ErrorHandler from "../../utils/error-handler";
import { findUserById } from "./user.repository";

export const getUser = async (userId: number) => {
  const user = await findUserById(userId);
  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  return user;
};
