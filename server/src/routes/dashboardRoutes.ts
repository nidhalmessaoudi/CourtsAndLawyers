import express from "express";
import path from "path";

import { isAuthenticated } from "../controllers/authController";

const router = express.Router();

const dashboardFolder = path.join(__dirname, "..", "build");

console.log(dashboardFolder);

router.use(
  "/dashboard",
  isAuthenticated("/login"),
  express.static(dashboardFolder)
);

export default router;
