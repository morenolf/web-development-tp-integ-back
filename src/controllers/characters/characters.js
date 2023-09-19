

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
        characters = await CharacterService.GetCharacters(req.params['userId']);

        res.json(characters);
    } catch (error) {
        next(error)
    }
};

const CreateCharacters = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            next(new ValidationError('Failed to validate character creation'));
        }
        newCharacter = CharacterFromRequest(req.params['userId'], req.body)
        character = await CharacterService.CreateCharacter(newCharacter)
    
        res.json(character);
    } catch (error) {
        next(error)
    }
};

const CharacterFromRequest = function(userId, body) {
    return {            
        id: new mongoose.Types.ObjectId(),
        userId: userId,
        name: body.name,
        cloth: {
            head: {
                id: body.cloth.head.id,
                type: body.cloth.head.type,
                name: body.cloth.head.name,
                url: body.cloth.head.url
            },
            body: {
                id: body.cloth.body.id,
                type: body.cloth.body.type,
                name: body.cloth.body.name,
                url: body.cloth.body.url
            },
            legs: {
                id: body.cloth.legs.id,
                type: body.cloth.legs.type,
                name: body.cloth.legs.name,
                url: body.cloth.legs.url
            },
            feet: {
                id: body.cloth.feet.id,
                type: body.cloth.feet.type,
                name: body.cloth.feet.name,
                url: body.cloth.feet.url
            },
        }
    }
}

module.exports = {
    Characters,
    CreateCharacters
}