import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import {
  loadToken,
  removeToken,
  removeUser,
  saveToken,
  saveUser,
} from "../../utils/storage";
import { clearAuth, setAuth, setUser } from "./authSlice";

type User = { id: string; name: string; email: string; role: string };

export type LoginPayload = { email: string; password: string };

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
};

export type AuthResponse = { token: string; user: User };

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      const token = loadToken();
      if (token) {
        headers.set("Autherization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuth(data));
          saveToken(data.token);
          saveUser(data.user);
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),

    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (payload) => ({
        url: "/auth/signup",
        method: "POST",
        body: payload,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuth(data));
          saveToken(data.token);
          saveUser(data.user);
        } catch (error) {
          console.error("Register failed:", error);
        }
      },
    }),

    me: builder.query<User, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          saveUser(data);
        } catch (error) {
          console.error("Me failed:", error);
          dispatch(clearAuth());
          removeToken();
          removeUser();
        }
      },
    }),
  }),
});
