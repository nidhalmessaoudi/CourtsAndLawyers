const shell = require("shelljs");

shell.cp("-R", ["src/public", "src/views", "src/dashboard/build"], "dist/");
