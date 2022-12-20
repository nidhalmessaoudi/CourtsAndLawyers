import express from "express";

import { isAuthenticatedAPI } from "../../controllers/authController";

const router = express.Router();

router.use(isAuthenticatedAPI);

router.get("/cases");
