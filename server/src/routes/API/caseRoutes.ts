import express from "express";

import * as caseController from "../../controllers/caseController";

const router = express.Router();

router
  .route("/")
  .get(caseController.getUserCases)
  .post(caseController.postCase);

export default router;
