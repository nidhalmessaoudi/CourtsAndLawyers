import express from "express";

import * as publicController from "../controllers/publicController";

const router = express.Router();

router.get("/", publicController.getHome);
router.get("/terms", publicController.getTerms);
router.get("/privacy", publicController.getPrivacy);

export default router;
