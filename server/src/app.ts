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

const app = express();

// CORS
app.use(cors());

// Trust proxy
app.set("trust proxy", 1);

// Session
export function setupSession(client: MongoClient) {
  const httpOnly = process.env.MODE === "production" ? true : false;
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
      unset: "keep",
    })
  );
}

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Template Engine
app.set("view engine", "ejs");

// Attach HTTP Headers
app.use(helmet());

// JSON Body Parser
app.use(express.json({ limit: "50kb" }));

// Data Sanitization
app.use(mongoSanitize());

// Prevent Parameter Pollution
app.use(hpp());

// Main Routes
app.get("/", (req, res) => {
  res.end("Hello from the other side!!!");
});

export default app;
