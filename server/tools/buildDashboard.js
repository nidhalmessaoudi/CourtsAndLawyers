const shell = require("shelljs");

shell.cd("src/dashboard");
shell.exec("npm run build");
