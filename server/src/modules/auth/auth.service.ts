import ErrorHandler from "../../utils/error-handler";
import { hashPassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";
import * as authService from "./auth.repository";

interface SignupInput {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
}
export const signupUser = async ({
  name,
  email,
  password,
  role = "USER",
}: SignupInput) => {
  const data = { name, email, password, role };
  let isUserExisting = await authService.findUserByEmail(email);

  if (isUserExisting) {
    throw new ErrorHandler(`User with ${email} email already exists`, 400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await authService.createUser({
    ...data,
    password: hashedPassword,
  });

  console.log("user  : ", user);

  //   if (!user) {
  //     return;
  //   }
  //   const token = signToken({ id: user.id, role: user.role });
  return { user };
};
