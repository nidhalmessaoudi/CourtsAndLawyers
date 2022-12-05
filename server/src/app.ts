import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import cors from "cors";

const app = express();

app.use(cors());

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
