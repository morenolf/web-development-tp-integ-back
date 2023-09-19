const CharacterRepository = require("../repositories/character_repository.js");
const { MaxChractersError, CharactersNotFound } = require("../models/exceptions.js");
const MAX_CHARACTERS = 5;

const GetCharacters = async function(userId){
    characters = await CharacterRepository.GetByUserId(userId);

    if (!characters) {
        throw new CharactersNotFound('Characters not found');
    }

    return characters
}


const CreateCharacter = async(character) => {
        
    charactersCount = CharacterRepository.CountAll(character.id);
    if (charactersCount >= MAX_CHARACTERS) {
        console.log(errors.array());
        throw new MaxChractersError('Maximum characters creation exceeded');
    }

    character = await CharacterRepository.Create(character);

    return character
}

module.exports = { CreateCharacter, GetCharacters }


