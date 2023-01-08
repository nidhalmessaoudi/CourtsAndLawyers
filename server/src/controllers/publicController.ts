import path from "path";
import { Request, Response } from "express";

export function getHome(req: Request, res: Response) {
  res.sendFile("index.html", { root: path.join(__dirname, "..", "views") });
}

export function getTerms(req: Request, res: Response) {
  res.sendFile("terms.html", {
    root: path.join(__dirname, "..", "views"),
  });
}

export function getPrivacy(req: Request, res: Response) {
  res.sendFile("privacy.html", {
    root: path.join(__dirname, "..", "views"),
  });
}
