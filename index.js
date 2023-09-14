require("express-async-handler");
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const healthRouter = require("./src/routes/health.js");
const charactersRouter = require("./src/routes/characters.js");
const { LogError } = require("./src/middlewares/log_error.js");
const { ErrorHandler } = require("./src/middlewares/error_handler.js");
const { CreateDBConnection } = require("./src/repositories/db_client.js");


const server = config.get("server");
const mongoDbConfig = config.get("mongoDb");

CreateDBConnection(mongoDbConfig);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/health", healthRouter);
app.use("/characters", charactersRouter);
app.use(LogError);
app.use(ErrorHandler);

app.listen(server.port, server.hostname, () => {
  console.log(`Server running at http://${server.hostname}:${server.port}/`);
});
