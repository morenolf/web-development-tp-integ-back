

const CharacterService = require("../services/character_service.js")
const { validationResult } = require("express-validator");
const { ValidationError } = require("../models/exceptions.js");
const mongoose = require("mongoose");

const Characters = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to validate user id');
        }
        characters = await CharacterService.GetCharacters(newCharacter);

        res.json(characters);
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
    newCharacter = characterFromRequest(req.params['userId'], req.body)
    character = await CharacterService.CreateCharacter(newCharacter)

    res.json(character);
};


const characterFromRequest = function(userId, body) {
    return {            
        id: new mongoose.Types.ObjectId(),
        userId: userId,
        name: body.name,
        cloth: {
            head: body.cloth.head,
            body: body.cloth.body,
            legs: body.cloth.legs,
            feet: body.cloth.feet
        }
    }
}

module.exports = {
    Characters,
    CreateCharacters
}