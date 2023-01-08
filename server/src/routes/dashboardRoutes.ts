import express from "express";
import path from "path";

import { isAuthenticated } from "../controllers/authController";

const router = express.Router();

const dashboardFolder = path.join(__dirname, "..", "build");

router.use(
  "/dashboard",
  isAuthenticated("/login"),
  express.static(dashboardFolder)
);

export default router;
