import express from "express";
import * as authController from "../controllers/authController";

const router = express.Router();

router.post("/logout", authController.getLogOut);

router
  .route("/login")
  .all(authController.redirectIfAuthenticated)
  .get(authController.getLogIn)
  .post(authController.postLogIn);

router
  .route("/signup")
  .all(authController.redirectIfAuthenticated)
  .get(authController.getSignUp)
  .post(authController.postSignUp);

export default router;
