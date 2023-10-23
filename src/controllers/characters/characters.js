

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

const CreateCharacter = async (req, res, next) => {
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

const UpdateCharacter = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            next(new ValidationError('Failed to validate character update'));
        }

        updatedCharacter = CharacterFromRequest(req.params['userId'], req.body)
        
        character = await CharacterService.UpdateCharacter(newCharacter)
    
        res.json(character);
    } catch (error) {
        next(error)
    }
};

const DeleteCharacter = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            next(new ValidationError('Failed to validate character deletion'));
        }

        character = await CharacterService.DeleteCharacter(id)
    
        res.json(character);
    } catch (error) {
        next(error)
    }
};

const CharacterFromRequest = function(userId, bodyReq) {
    
    return {            
        id: new mongoose.Types.ObjectId(),
        userId: userId,
        name: bodyReq.name,
        cloth: {
            head: bodyReq.head? clothgetCloth(head) : null,
            body: bodyReq.body? getCloth(body):null,
            legs: bodyReq.legs? getCloth(legs):null,
            feet: bodyReq.feet? getCloth(feet): null
        }
    }
}

const getCloth = function(cloth) {
    if (!cloth){
        return null
    }
    return {
        id: new mongoose.Types.ObjectId(cloth.id.toString()) ,
        type: cloth.type,
        name: cloth.name,
        url: cloth.url
    }
}

module.exports = {
    Characters,
    CreateCharacter,
    UpdateCharacter,
    DeleteCharacter
}