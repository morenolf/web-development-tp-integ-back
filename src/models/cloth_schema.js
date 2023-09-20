
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClothSchema = new Schema(
    {
        type: { type: String, require: true },
        name: { type: String, require: true },
        url: { type: String, require: true }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("Cloth", ClothSchema, "cloth")