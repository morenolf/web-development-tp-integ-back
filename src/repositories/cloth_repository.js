const mongoose = require("mongoose");
const ClothSchema = require("../models/cloth_schema.js");
const { RepositoryFailure } = require("../models/exceptions.js");

const ClothByPaging = async (page, limit, type) => {
    try {
        await ClothSchema.find({type: type})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec()
        .then(result => {
            return result;
        })
    }catch(err){
        console.log(err);
        throw new RepositoryFailure("Failed to retrieve cloth by id")
    }
}

module.exports = { ClothByPaging }