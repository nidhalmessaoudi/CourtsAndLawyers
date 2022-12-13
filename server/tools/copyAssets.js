const shell = require("shelljs");

shell.cp("-R", ["src/public", "src/views"], "dist/");
