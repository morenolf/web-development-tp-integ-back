const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const UserSchema = require("../models/user_schema.js");
const { ValidationError, UserNotFound, UserAlreadyExist, InvalidUser } = require("../models/exceptions.js");

const Login = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to validate user for login');
        }

        const user = await UserSchema.findOne({ email: req.body.email });
        if (!user) {
            throw new UserNotFound("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) throw new InvalidUser("Invalid user")

        res.status(202).send();
    } catch (error) {
        next(error)
    }
};

const Register = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to register user');
        }

        const emailExist = await UserSchema.findOne({ email: req.body.email });
        if (emailExist) {
            throw new UserAlreadyExist("User already exist");
        }
        

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: password
        });

        const savedUser = await user.save();

        res.stauts(201).json(savedUser);
    } catch (error) {
        next(error)
    }
};

module.exports = { Login, Register }