const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: { type: String, require: true },
        password: { type: String, unique: true },
        token: { type: String }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("Users", UserSchema, "users")