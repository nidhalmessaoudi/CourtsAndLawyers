import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import uncaughtExceptionHandler from "./utils/uncaughtExceptionHandler";
import rejectionHandler from "./utils/rejectionHandler";

(async function init() {
  // Handle Uncaught Exceptions
  uncaughtExceptionHandler();

  await mongoose.connect(process.env.DB_HOST!);

  console.log("DB connection successful!");

  const port = process.env.PORT || 8000;

  const server = app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
  });

  // Handle Unhandled Rejections
  rejectionHandler(server);
})();
