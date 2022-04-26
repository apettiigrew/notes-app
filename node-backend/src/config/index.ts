import assert from "assert";
import path from "path";

interface config {
  app: { title: string };
  env: string;
  root: string;
  port: number | string;
  seedDB: boolean | string;
  db: { uri: string };
  appSecret: string;
}

export const config: config = {
  app: {
    title: process.env.APP_TITLE || "note-node-backend",
  },
  env: process.env.NODE_ENV || "development",
  root: path.normalize(__dirname + "/../.."),
  seedDB: process.env.SEED_DB || false,
  port: process.env.PORT || 8081,
  db: {
    uri: process.env.MONGODB_CONNECTION_STRING || "",
  },
  appSecret: process.env.APP_SECRET || "",
};

assert.ok(config.db.uri, 'The "MONGODB_CONNECTION_STRING" environment variable is required');
