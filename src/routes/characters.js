const express = require("express");
const { CreateCharacters, Characters } = require("../controllers/characters/characters.js");
const { CreateCharacterCheck, UserIdValidator } = require("../controllers/characters/characters_request_validator.js");
const { VerifyToken } = require("../middlewares/auth_validator.js");
const router = express.Router();


router.get('/:userId', VerifyToken, UserIdValidator, Characters)

router.post('/:userId', VerifyToken, CreateCharacterCheck, CreateCharacters)

module.exports = router;