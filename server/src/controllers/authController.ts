import { Request, Response } from "express";
import K from "../K";
import User from "../models/User";

export function getSignUp(req: Request, res: Response) {
  res.render("signup", { title: `Sign Up | ${K.brand}` });
}

export function getLogIn(req: Request, res: Response) {
  res.render("login", { title: `Login | ${K.brand}` });
}

export async function postSignUp(req: Request, res: Response) {
  try {
    const user = new User(req.body);
    await user.save();
  } catch (err) {
    const error = err as Error;
    res.render("signup", {
      title: `Sign Up | ${K.brand}`,
      error: error.message,
    });
  }
}

export function postLogIn(req: Request, res: Response) {}
