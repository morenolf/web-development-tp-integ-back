const CharacterRepository = require("../repositories/character_repository.js");
const MAX_CHARACTERS = 5;

const CreateCharacter = async function(character){
        
    charactersCount = CharacterRepository.CountAll(character.id);
    if (charactersCount >= MAX_CHARACTERS) {
        console.log(errors.array());
        throw new MaxChractersError('Maximum characters creation exceeded');
    }

    CharacterRepository.create(character);

    return character

}

module.exports = { CreateCharacter }


