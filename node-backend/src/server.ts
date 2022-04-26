import app from "./app";
import { config } from "@config/index";
import logger from "@config/logger";
import { mongoConnect } from "./database";

async function startServer() {
  await mongoConnect()
    .then(() => {
      app.listen(config.port, () => {
        logger.info(`Server listing on port ${config.port}...`);
      });
    })
    .catch((error) => {
      logger.error(error);
      process.exit(1);
    });
}

startServer();
