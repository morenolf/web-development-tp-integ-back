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

const GetById = async function(id){
    try {
        return await CharacterSchema.findById({id: id});  
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve characters by id")
    }
}

const UpdateById = async function(id){
    try {
        return await CharacterSchema.UpdateById({id: id});  
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to update character by id")
    }
}

const DeleteById = async function(id){
    try {
        return await CharacterSchema.DeleteById({id: id});  
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to delete character by id")
    }
}

module.exports = {
    CountAll,
    Create,
    GetByUserId,
    GetById,
    DeleteById
}