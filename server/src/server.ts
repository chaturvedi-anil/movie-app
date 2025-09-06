import app from "./app";
import { checkDatabaseConnection } from "./configs/database";
import { ENV } from "./configs/env";
import { logger } from "./utils/logger";

const startServer = async () => {
  await checkDatabaseConnection();
  app.listen(ENV.PORT, () => {
    logger.info(`express is listing on port ${ENV.PORT}`);
  });
};

startServer().catch((err) => {
  logger.error("Server failed to start", err);
  process.exit(1);
});
