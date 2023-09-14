
const CharacterModel = require("../models/character.js")
const CharacterService = require("../services/character_service.js")
const { validationResult } = require("express-validator");
const { ValidationError } = require("../models/exceptions.js");

const Characters = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to validate user id');
        }
        res.send("ok");
    } catch (error) {
        next(error)
    }
};

const CreateCharacters = async (req, res, next) => {
    let errors = await validationResult(req); 
    if ( !errors.isEmpty()) {
        console.log(errors.array());
        next(new ValidationError('Failed to validate character creation'));
    }

    newCharacter = CharacterModel.CharacterFromRequest(req.body)

    CharacterService.CreateCharacter(newCharacter)

    res.send("ok");
};

module.exports = {
    Characters,
    CreateCharacters
}