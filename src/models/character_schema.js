const mongoose = require("mongoose");
const { Schema } = mongoose;

const CharacterSchema = new Schema(
    {
        userId: { type: String, require: true },
        name: { type: String, require: true },
        head: { type: String, require: true },
        body: { type: String, require: true },
        legs: { type: String, require: true },
        feet: { type: String, require: true }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("Characters", CharacterSchema, "characters")
