const ClothSchema = require("../models/cloth_schema.js");
const { RepositoryFailure } = require("../models/exceptions.js");


const CountCloth = async (type) => {
    try {
        return await ClothSchema.countDocuments({"type": type});
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to count cloth by type")
    }
}

const ClothByPaging = async (page, limit, type) => {
    try {
        return await ClothSchema.find({"type": type})
        .limit(limit * 1)
        .skip((page) * limit)
        .exec();
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve cloth by id")
    }
}

const Cloth = async () => {
    try {
        return await ClothSchema.find(); 
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve cloth by id")
    }
}

module.exports = { ClothByPaging, Cloth, CountCloth }