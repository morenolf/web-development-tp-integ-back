const mongoose = require("mongoose");
const { Schema } = mongoose;

const CharacterSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId, require: true },
        userId: { type: String, require: true },
        name: { type: String, require: true },
        cloth: { 
            head: { type: String, require: true},
            body: { type: String, require: true},
            legs: { type: String, require: true},
            feet: { type: String, require: true}
         }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("CharacterSchema", CharacterSchema)