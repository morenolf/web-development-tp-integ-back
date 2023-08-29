const express = require("express");
const bodyParser = require("body-parser");
const healthRouter = require("./src/routes/health.js");

const app = express();
const hostname = 'localhost'
const port = 8091;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/health", healthRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });