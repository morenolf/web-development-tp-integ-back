const express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const healthRouter = require("./src/routes/health.js");
const { errorHandler } = require("./src/middlewares/error_handler.js");
const config = require("config");

const server = config.get("server");
const mongoDbConfig = config.get("mongoDb");

try {
  mongoose.connect(mongoDbConfig.url+":"+mongoDbConfig.port+"/"+mongoDbConfig.name);
} catch (err) {
  console.log(err);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/health", healthRouter);

app.use(errorHandler);

app.listen(server.port, server.hostname, () => {
  console.log(`Server running at http://${server.hostname}:${server.port}/`);
});
