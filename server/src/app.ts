import path from "path";

import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { MongoClient } from "mongodb";
import { v4 as uuid } from "uuid";

import publicRoutes from "./routes/publicRoutes";
import authRoutes from "./routes/authRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import APIRoutes from "./routes/API/APIRoutes";
import { serverErrorHandler } from "./controllers/errorController";
import { IUser } from "./models/User";
import { HydratedDocument } from "mongoose";

const app = express();

// Express Request object extension
declare global {
  namespace Express {
    interface Request {
      user?: HydratedDocument<IUser> | null;
    }
  }
}

// Session type declaration
declare module "express-session" {
  export interface SessionData {
    user: string;
  }
}

// CORS
app.use(cors());

// Trust proxy
app.set("trust proxy", 1);

// Session
export function setupSessionAndRunMiddlewares(client: MongoClient) {
  const httpOnly = process.env.NODE_ENV === "production" ? true : false;

  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      cookie: {
        httpOnly,
        maxAge: +process.env.SESSION_AGE! * 24 * 60 * 60 * 1000,
        secure: httpOnly,
      },
      store: MongoStore.create({ client, touchAfter: 72 * 3600 }),
      genid(req) {
        return uuid();
      },
      name: "usersid",
      resave: false,
      saveUninitialized: false,
      unset: "destroy",
    })
  );

  // Static Files
  app.use(express.static(path.join(__dirname, "public")));

  // Template Engine
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");

  // Attach HTTP Headers
  app.use(helmet());

  // Remove Express Header
  app.disable("x-powered-by");

  // JSON Body Parser
  app.use(express.json({ limit: "50kb" }));
  app.use(express.urlencoded({ extended: true, limit: "50kb" }));

  // Data Sanitization
  app.use(mongoSanitize());

  // Prevent Parameter Pollution
  app.use(hpp());

  // Server Routes
  app.use(publicRoutes);
  app.use(authRoutes);
  app.use(dashboardRoutes);

  // API Routes
  app.use("/api/v1/", APIRoutes);

  // Error Handler
  app.use(serverErrorHandler);
}

export default app;
