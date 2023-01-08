import express, { Request, Response } from "express";

import { isAuthenticatedAPI } from "../../controllers/authController";
import caseRoutes from "./caseRoutes";

const router = express.Router();

router.use(isAuthenticatedAPI);

router.use("/cases", caseRoutes);

router.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `${req.originalUrl} is not found on this server.`,
  });
});

export default router;
