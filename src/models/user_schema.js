const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: string, require: true},
    email: {type: string, require: true},
    password: {type: string, require: true}
})

module.exports = mongoose.model("UserSchema", UserSchema)