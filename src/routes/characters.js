const express = require("express");
const charactersController = require("../controllers/characters.js");

const router = express.Router();

router.route('/')
.get(charactersController.Characters)

router.route('/')
.post(charactersController.CreateCharacter)

module.exports = router;