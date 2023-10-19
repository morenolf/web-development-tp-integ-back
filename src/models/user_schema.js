const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, unique: true },
        token: { type: String }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model("Users", UserSchema, "users")