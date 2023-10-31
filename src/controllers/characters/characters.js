

const CharacterService = require("../../services/character_service.js")
const { validationResult } = require("express-validator");
const { ValidationError } = require("../../models/exceptions.js");
const mongoose = require("mongoose");

const Characters = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to Get Characters');
        }
        characters = await CharacterService.GetCharacters(req.params['userId']);

        res.json(characters);
    } catch (error) {
        next(error)
    }
};

const TopCharacters = async (req, res, next) => {
    try {
        characters = await CharacterService.GetTopCharacters();

        res.json(characters);
    } catch (error) {
        next(error)
    }
};

const GetCharacter = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to validate Get Character params');
        }
        characters = await CharacterService.GetCharacter(req.params['id']);

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

        updatedCharacter = UpdateCharacterFromRequest(req.params['id'], req.body)
        
        character = await CharacterService.UpdateCharacter(updatedCharacter)
    
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
        userId = req.params['userId']
        id = req.params['id']
        character = await CharacterService.DeleteCharacter(userId, id)
    
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
        head: bodyReq.head? bodyReq.head: null,
        body: bodyReq.body? bodyReq.body: null,
        legs: bodyReq.legs? bodyReq.legs: null,
        feet: bodyReq.feet? bodyReq.feet: null
    }
}

const UpdateCharacterFromRequest = function(id, bodyReq) {
    
    return {            
        _id: new mongoose.Types.ObjectId(id),
        userId: null ,
        name: bodyReq.name,
        head: bodyReq.head? bodyReq.head: null,
        body: bodyReq.body? bodyReq.body: null,
        legs: bodyReq.legs? bodyReq.legs: null,
        feet: bodyReq.feet? bodyReq.feet: null
    }
}

module.exports = {
    TopCharacters,
    Characters,
    GetCharacter,
    CreateCharacter,
    UpdateCharacter,
    DeleteCharacter
}