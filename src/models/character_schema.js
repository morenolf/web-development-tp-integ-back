const mongoose = require("mongoose");
const { Schema } = mongoose;

const CharacterSchema = new Schema(
    {
        userId: { type: String, require: true },
        name: { type: String, require: true },
        cloth: { 
            head: { 
                id: { type: mongoose.Types.ObjectId, require: true },
                type: { type: String, require: true },
                name: { type: String, require: true },
                url: { type: String, require: true }
            },
            body: { 
                id: { type: mongoose.Types.ObjectId, require: true },
                type: { type: String, require: true },
                name: { type: String, require: true },
                url: { type: String, require: true }
             },
            legs: { 
                id: { type: mongoose.Types.ObjectId, require: true },
                type: { type: String, require: true },
                name: { type: String, require: true },
                url: { type: String, require: true }
             },
            feet: { 
                id: { type: mongoose.Types.ObjectId, require: true },
                type: { type: String, require: true },
                name: { type: String, require: true },
                url: { type: String, require: true }
             }
         }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("CharacterSchema", CharacterSchema)
