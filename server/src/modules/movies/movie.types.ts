import { MovieType, Prisma } from "@prisma/client";

export type MovieInput = {
  title: string;
  description: string;
  type: MovieType;
  genre: string;
  actors: string;
  director: string;
  language: string;
  country: string;
  budget: number;
  boxOffice?: number;
  location: string;
  duration: string;
  year: number;
  imageUrl?: string | null;
  status: "PENDING";
  createdBy: number;
};
