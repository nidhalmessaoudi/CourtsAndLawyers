import { NextFunction, Request, Response } from "express";
import Case from "../models/Case";

export async function getUserCases(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const theCases = await Case.find({ _id: req.user?._id });

    res.status(200).json({
      status: "success",
      data: {
        cases: theCases,
      },
    });
  } catch (err) {
    return next(err);
  }
}

export async function postCase(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const theCase = new Case(req.body);

    await theCase.save();

    res.status(200).json({
      status: "success",
      data: {
        case: theCase,
      },
    });
  } catch (err) {
    return next(err);
  }
}
