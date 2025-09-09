import ErrorHandler from "../../utils/error-handler";
import * as userRepository from "./user.repository";

export const getUser = async (userId: number) => {
  const user = await userRepository.findUserById(userId);
  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  return user;
};

export const getListUser = async () => {
  const users = await userRepository.findAllUsers();
  if (!users) {
    throw new ErrorHandler("Users not found", 404);
  }

  return users;
};
