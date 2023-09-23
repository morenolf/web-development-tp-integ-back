

const CharacterService = require("../../services/character_service.js")
const { validationResult } = require("express-validator");
const { ValidationError } = require("../../models/exceptions.js");
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

const CharacterFromRequest = function(userId, bodyReq) {
    cloth = bodyReq.cloth
    return {            
        id: new mongoose.Types.ObjectId(),
        userId: userId,
        name: bodyReq.name,
        cloth: {
            head: getCloth(cloth.head),
            body: getCloth(cloth.body),
            legs: getCloth(cloth.legs),
            feet: getCloth(cloth.feet)
        }
    }
}

const getCloth = function(cloth) {
    return {
        id: new mongoose.Types.ObjectId(cloth.id.toString()) ,
        type: cloth.type,
        name: cloth.name,
        url: cloth.url
    }
}

module.exports = {
    Characters,
    CreateCharacters
}