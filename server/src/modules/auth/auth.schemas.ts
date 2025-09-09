import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long.")
    .max(255, "Name must not exceed 255 characters"),
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(32, "Password must not exceed 32 characters.")
    .regex(
      passwordRegex,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    ),
  role: z.enum(["USER", "ADMIN"]).optional(),
});

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(32, "Password must not exceed 32 characters.")
    .regex(
      passwordRegex,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    ),
});
