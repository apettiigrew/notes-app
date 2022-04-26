import { config } from "@config/index";
import logger from "@config/logger";
import mongoose from "mongoose";

async function mongoConnect() {
  return await mongoose.connect(config.db.uri);
}

async function mongoDisconnect() {
  return await mongoose.disconnect();
}

mongoose.connection.once("open", () => {
  logger.info("Database successfully connected...");
});

mongoose.connection.once("error", () => {
  logger.error("Database failed to connect.");
  process.exit(1);
});

export { mongoConnect, mongoDisconnect };
