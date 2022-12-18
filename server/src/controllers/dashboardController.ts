import { Request, Response } from "express";

import User from "../models/User";

export async function getDashboard(req: Request, res: Response) {
  try {
    const user = await User.findOne({ _id: req.session.user });
    res.send(
      `Hello back ${user?.name}, you have accessed this route because you are logged in!
        <a href="/logout">Log Out</a>
        `
    );
  } catch (err) {
    console.log(err);
  }
}
