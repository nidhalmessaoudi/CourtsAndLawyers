import express from "express";
import * as authController from "../controllers/authController";

const router = express.Router();

router
  .route("/login")
  .get(authController.getLogIn)
  .post(authController.postLogIn);

router
  .route("/signup")
  .get(authController.getSignUp)
  .post(authController.postSignUp);

router.get(
  "/dashboard",
  authController.isAuthenticated,
  authController.getDashboard
);

export default router;
