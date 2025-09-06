import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger";

export const prismaClient = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export async function checkDatabaseConnection() {
  try {
    await prismaClient.$connect();
    logger.info("Database connected successfully");
  } catch (err) {
    logger.error("Database connection failed", err);
    process.exit(1);
  }
}
