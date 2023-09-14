const mongoose = require("mongoose");
const CharacterSchema = require("./character_schema.js");

const CountAll = async function(userId){
    try {
        await CharacterSchema.countDocuments({userId: userId})
        .then(result => {
            return result;
        })
    }catch(err){
        console.log(err);
        throw RepositoryFailure("Failed to process character count")
    }
}

const Create = async function(character){
    newCharacter = schemaFromModel(character);
    return await CharacterSchema.create(newCharacter);
}

const schemaFromModel = function(character){
    return {            
        id: mongoose.Types.ObjectId(),
        userId: character.userId,
        name: character.name,
        cloth: {
            head: character.cloth.head,
            body: character.cloth.body,
            legs: character.cloth.legs,
            feet: character.cloth.feet
        }
    }
}

module.exports = {
    CountAll,
    Create
}