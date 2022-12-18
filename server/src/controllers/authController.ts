import { NextFunction, Request, Response } from "express";
import K from "../K";
import User from "../models/User";
import AppError from "../utils/AppError";

function createAndSaveUserSession(
  req: Request,
  next: NextFunction,
  userId: string,
  callAfterSave: () => void
) {
  req.session.regenerate(function (err) {
    if (err) {
      return next(err);
    }

    req.session.user = userId;
    req.session.save(function (err) {
      if (err) {
        return next(err);
      }

      callAfterSave();
    });
  });
}

export function isAuthenticated(fallbackRoute: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.session.user) {
      return next();
    } else {
      res.redirect(fallbackRoute);
    }
  };
}

export function redirectIfAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.session.user) {
    res.redirect("/dashboard");
  } else {
    next();
  }
}

export function getSignUp(req: Request, res: Response) {
  res.render("signup", { title: `Sign Up | ${K.BRAND}` });
}

export function getLogIn(req: Request, res: Response) {
  res.render("login", { title: `Login | ${K.BRAND}` });
}

export async function postSignUp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await new User(req.body).save();

    createAndSaveUserSession(req, next, user._id.toString(), function () {
      res.redirect("/dashboard");
    });
  } catch (err) {
    return next(err);
  }
}

export async function postLogIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    const passwordIsCorrect = await user?.isCorrectPassword(
      req.body.password,
      user.password
    );

    if (!user || !passwordIsCorrect) {
      throw new Error("Invalid email or password.");
    }

    createAndSaveUserSession(req, next, user._id.toString(), function () {
      res.redirect("/dashboard");
    });
  } catch (err) {
    const error = err as Error;
    res.render("login", {
      title: `Login | ${K.BRAND}`,
      error: error.message,
    });
  }
}

export function getLogOut(req: Request, res: Response) {
  req.session.destroy(function (err) {
    res.redirect("/login");
  });
}
