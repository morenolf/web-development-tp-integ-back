const express = require("express");
const { 
    CreateCharacters,
    Characters 
} = require("../controllers/characters.js");

const { CreateCharacterCheck, UserIdValidator } = require("../controllers/characters_request_validator.js");
const router = express.Router();


router.get('/:userId', UserIdValidator, Characters)

router.post('/:userId', CreateCharacterCheck, CreateCharacters)

module.exports = router;