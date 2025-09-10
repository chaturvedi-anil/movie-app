import { z } from "zod";

export const movieSchema = z.object({
  title: z
    .string()
    .min(1, "Title must be at least 1 characters long")
    .max(255, "Title must not exceed 255 characters"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters long"),
  type: z.enum(["MOVIE", "TV_SHOW"]),
  genre: z.string(),
  actors: z.string(),
  director: z
    .string()
    .min(2, "director name must be at least 2 characters long")
    .max(255, "Director name must not exceed 255 characters"),
  language: z.string().min(2, "Language must be at least 1 characters long"),
  country: z.string().min(2, "Country must be at least 1 characters long"),
  budget: z.number().positive("Budget must be a positive number"),
  boxOffice: z.number().optional(),
  location: z.string().min(2, "Location must be at least 2 characters long"),
  duration: z.string().min(1, "Duration must be at least 1 minute"),
  year: z
    .number()
    .min(1888, "Year must be valid")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  imageUrl: z.url().optional(),
});
