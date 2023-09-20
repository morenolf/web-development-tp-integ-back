const ClothSchema = require("../models/cloth_schema.js");
const { RepositoryFailure } = require("../models/exceptions.js");

const ClothByPaging = async (page, limit, type) => {
    try {
        return await ClothSchema.find({type: type})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve cloth by id")
    }
}

const Cloth = async () => {
    try {
        //{type: type}
        return await ClothSchema.find(); 
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve cloth by id")
    }
}

module.exports = { ClothByPaging, Cloth }