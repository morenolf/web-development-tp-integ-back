const express = require("express");
const { Characters, GetCharacter, CreateCharacter, UpdateCharacter, DeleteCharacter} = require("../controllers/characters/characters.js");
const { UserIdValidator, GetCharacterValidator, CreateCharacterCheck, UpdateCharacterCheck, DeleteCharacterCheck } = require("../controllers/characters/characters_request_validator.js");
const { VerifyToken } = require("../middlewares/auth_validator.js");
const router = express.Router();


router.get('/:userId', VerifyToken, UserIdValidator, Characters)

router.get('/character/:id', VerifyToken, GetCharacterValidator, GetCharacter)

router.post('/:userId', VerifyToken, CreateCharacterCheck, CreateCharacter)

router.patch('/:id', VerifyToken, UpdateCharacterCheck, UpdateCharacter)

router.delete('/:userId/character/:id', VerifyToken, DeleteCharacterCheck, DeleteCharacter)

module.exports = router;