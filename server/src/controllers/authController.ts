import { NextFunction, Request, Response } from "express";
import K from "../K";
import User from "../models/User";

async function createAndSaveUserSession(
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

export function isAuthenticated(nextRoute?: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.session.user) {
      return nextRoute ? res.redirect(nextRoute) : next();
    } else {
      res.redirect("/login");
    }
  };
}

export function getSignUp(req: Request, res: Response) {
  res.render("signup", { title: `Sign Up | ${K.brand}` });
}

export function getLogIn(req: Request, res: Response) {
  res.render("login", { title: `Login | ${K.brand}` });
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
    const error = err as Error;
    res.render("signup", {
      title: `Sign Up | ${K.brand}`,
      error: error.message,
    });
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
      title: `Login | ${K.brand}`,
      error: error.message,
    });
  }
}

export async function getDashboard(req: Request, res: Response) {
  const user = await User.findOne({ _id: req.session.user });
  res.end(
    `Hello back ${user?.name}, you have accessed this route because you are logged in!`
  );
}
