import express from "express";
import * as authController from "../controllers/authController";

const router = express.Router();

router.get(
  "/dashboard",
  authController.isAuthenticated("/login"),
  authController.getDashboard
);

router.use(authController.redirectIfAuthenticated);

router
  .route("/login")
  .get(authController.getLogIn)
  .post(authController.postLogIn);

router
  .route("/signup")
  .get(authController.getSignUp)
  .post(authController.postSignUp);

export default router;
