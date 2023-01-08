import { Request, Response } from "express";

import K from "../K";

export function getHome(req: Request, res: Response) {
  res.render("home", { title: `${K.BRAND}` });
}

export function getTerms(req: Request, res: Response) {
  res.render("terms", { title: `Terms and Conditions | ${K.BRAND}` });
}

export function getPrivacy(req: Request, res: Response) {
  res.render("privacy", { title: `Privacy Policy | ${K.BRAND}` });
}
