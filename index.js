require("express-async-handler");
const express = require("express");
var cors = require('cors')
const config = require("config");
const bodyParser = require("body-parser");
const HealthRouter = require("./src/routes/health.js");
const CharactersRouter = require("./src/routes/characters.js");
const ClothRouter = require("./src/routes/cloth.js");
const UsersRouter = require("./src/routes/users.js");
const { LogError } = require("./src/middlewares/log_error.js");
const { ErrorHandler } = require("./src/middlewares/error_handler.js");
const { CreateDBConnection } = require("./src/repositories/db_client.js");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');

/*
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
*/

//DB Connection
const mongoDbConfig = config.get("mongoDb");
CreateDBConnection(mongoDbConfig);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

//Controllers
app.use("/health", HealthRouter);
app.use("/characters", CharactersRouter);
app.use("/cloth", ClothRouter);
app.use("/users", UsersRouter);

//Middleware
app.use(LogError);
app.use(ErrorHandler);

//Rest server
const server = config.get("server");
app.listen(server.port, server.hostname, () => {
  console.log(`Server running at http://${server.hostname}:${server.port}/`);
});
