import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export function serverErrorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {
    console.error(`${err.message}, ${err.stack}`);

    res.status(err.statusCode).render(err.renderView, {
      error: err.message,
    });
    return;
  }

  console.error(err);

  res
    .status(500)
    .end(
      "Something went wrong! Try again later or contact us if the problem persists."
    );
}
