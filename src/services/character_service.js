const CharacterRepository = require("../repositories/character_repository.js");
const { MaxCharactersError, CharactersNotFound } = require("../models/exceptions.js");
const MAX_CHARACTERS = 5;

const GetCharacters = async function(userId){
    characters = await CharacterRepository.GetByUserId(userId);

    if (!characters) {
        throw new CharactersNotFound('Characters not found');
    }

    return characters;
}


const CreateCharacter = async(character) => {
        
    charactersCount = await CharacterRepository.CountAll(character.userId);
    if (charactersCount >= MAX_CHARACTERS) {
        throw new MaxCharactersError('Maximum characters creation exceeded');
    }

    return await CharacterRepository.Create(character);
}

const UpdateCharacter = async(character) => {
        
    character = await CharacterRepository.GetById(character.id);
    if (!character) {
        throw new CharactersNotFound('Character not found');
    }

    return await CharacterRepository.UpdateById(character);
}

const DeleteCharacter = async(id) => {
        
    character = await CharacterRepository.GetById(id);
    if (!character) {
        throw new CharactersNotFound('Character not found');
    }

    return await CharacterRepository.DeleteById(id);
}

module.exports = { GetCharacters, CreateCharacter, UpdateCharacter, DeleteCharacter }


