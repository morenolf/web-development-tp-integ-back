const CharacterSchema = require("../models/character_schema.js");
const { RepositoryFailure } = require("../models/exceptions.js");

const CountAll = async function(userId){
    try {
        return await CharacterSchema.countDocuments({userId: userId});    
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to process character count")
    }
}

const Create = async function(character){
    try {
        return await CharacterSchema.create(character);
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed create character")
    }
}

const GetByUserId = async function(userId){
    try {
        return await CharacterSchema.find({userId: userId});  
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve characters by user id")
    }
}

module.exports = {
    CountAll,
    Create,
    GetByUserId    
}