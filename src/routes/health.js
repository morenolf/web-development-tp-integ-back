const express = require("express");
const healthController = require("../controllers/health.js");

const router = express.Router();

router.route('/')
.get(healthController.health)

module.exports = router;