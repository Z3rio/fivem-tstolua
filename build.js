var exec = require("child_process").exec;

exec("cd ./src/client/ && npx tstl");
exec("cd ./src/server/ && npx tstl");
exec("cd ./src/shared/ && npx tstl");
