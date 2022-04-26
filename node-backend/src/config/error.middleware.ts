import { NextFunction, Request, Response } from "express";
import Logger from "./logger";

export function error(err: TypeError, req: Request, res: Response, next: NextFunction) {
  Logger.error(err.message, err);
  res.status(500).send("Something failed.");
}
