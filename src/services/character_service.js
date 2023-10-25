const CharacterRepository = require("../repositories/character_repository.js");
const { MaxCharactersError, CharactersNotFound } = require("../models/exceptions.js");
const MAX_CHARACTERS = 4;

const GetCharacters = async function(userId){
    characters = await CharacterRepository.GetByUserId(userId);

    if (!characters) {
        throw new CharactersNotFound('Characters not found');
    }

    return characters;
}

const GetCharacter = async function(id){
    character = await CharacterRepository.GetById(id);

    if (!character) {
        throw new CharactersNotFound('Characters not found');
    }

    return character;
}

const CreateCharacter = async(character) => {
        
    charactersCount = await CharacterRepository.CountAll(character.userId);
    if (charactersCount >= MAX_CHARACTERS) {
        throw new MaxCharactersError('Maximum characters creation exceeded');
    }

    return await CharacterRepository.Create(character);
}

const UpdateCharacter = async(character) => {
    characterDB = await CharacterRepository.GetById(character.id);
    if (!character) {
        throw new CharactersNotFound('Character not found');
    }
    characterDB.name = character.name
    characterDB.head = character.head
    characterDB.body = character.body
    characterDB.legs = character.legs
    characterDB.feet = character.feet

    return await CharacterRepository.UpdateById(characterDB);
}

const DeleteCharacter = async(id) => {
        
    character = await CharacterRepository.GetById(id);
    if (!character) {
        throw new CharactersNotFound('Character not found');
    }

    return await CharacterRepository.DeleteById(id);
}

module.exports = { GetCharacters, GetCharacter, CreateCharacter, UpdateCharacter, DeleteCharacter }


