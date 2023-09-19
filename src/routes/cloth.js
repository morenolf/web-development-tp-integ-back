const express = require("express");
const { Cloth } = require("../controllers/cloth.js");
const { ValidateClothRequest } = require("../controllers/cloth_request_validator.js");
const { VerifyToken } = require("../middlewares/auth_validator.js");
const router = express.Router();

router.get('/:type', VerifyToken, ValidateClothRequest, Cloth)

module.exports = router;