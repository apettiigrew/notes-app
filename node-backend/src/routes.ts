import { error } from "@config/error.middleware";
import { Express, Request, Response } from "express";
import notes from "./api/notes";

export default function (app: Express) {
  app.use("/api/notes", notes);
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Welcome");
  });

  app.use(error);
}
