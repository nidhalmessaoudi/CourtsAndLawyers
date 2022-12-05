import { Server } from "http";

export default function (server: Server) {
  process.on("unhandledRejection", (err: Error) => {
    console.log(err.name, err.message);
    console.log("UNHANDLED REJECTION! Server shutting down...");
    server.close(() => {
      process.exit(1);
    });
  });
}
