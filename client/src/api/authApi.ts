import axios from "./axios";

export type LoginPayload = { email: string; password: string };
export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  role?: "ADMIN" | "USER";
};

export const loginRequest = async (payload: LoginPayload) => {
  const { data } = await axios.post("/auth/login", payload);
  return data;
};

export const registerRequest = async (payload: RegisterPayload) => {
  const { data } = await axios.post("/auth/signup", payload);
  return data;
};

export const meRequest = async () => {
  const { data } = await axios.get("/auth/me");
  return data;
};
