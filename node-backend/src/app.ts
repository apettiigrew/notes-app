import "module-alias/register";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import { config } from "@config/index";
import { urlencoded } from "body-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import cors from "cors";

const app = express();

if (config.env === "development") {
  app.use(morgan("tiny"));
}

app.use(cors());
app.set("view engine", "pug");
app.set("views", `${config.root}/src/views`);
app.use(helmet());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

routes(app);
export default app;
