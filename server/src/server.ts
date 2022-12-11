import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

import app, { setupSession } from "./app";
import uncaughtExceptionHandler from "./utils/uncaughtExceptionHandler";
import rejectionHandler from "./utils/rejectionHandler";

(async function init() {
  // Handle Uncaught Exceptions
  uncaughtExceptionHandler();

  const dbConnection = await mongoose.connect(process.env.DB_HOST!);

  setupSession(dbConnection.connection.getClient());

  console.log("DB connection successful!");

  const port = process.env.PORT || 8000;

  const server = app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
  });

  // Handle Unhandled Rejections
  rejectionHandler(server);
})();
