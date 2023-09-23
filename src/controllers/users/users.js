const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const UserSchema = require("../../models/user_schema.js");
const { ValidationError, UserNotFound, UserAlreadyExist, InvalidUser } = require("../../models/exceptions.js");

const Login = async (req, res, next) => {
    try {
        let errors = await validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            throw new ValidationError('Failed to validate user for login');
        }

        const user = await UserSchema.findOne({ email: req.query.email });
        if (!user) {
            throw new UserNotFound("User not found");
        }

        const validPassword = await bcrypt.compare(req.query.password, user.password);
        if (!validPassword) throw new InvalidUser("Invalid user")

        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            "TESTING TOKEN KEY",
            {
              expiresIn: "2h",
            }
        );

        user.token = token;

        res.status(202).send(user);
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

        const user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: ""
        });

        const emailExist = await UserSchema.findOne({ email: user.email });
        if (emailExist) {
            throw new UserAlreadyExist("User already exist");
        }
        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        const savedUser = await UserSchema.create(user);

        const token = jwt.sign(
            { user_id: savedUser._id, email: savedUser.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );

        savedUser.token = token;

        res.status(201).json(savedUser);
    } catch (error) {
        next(error)
    }
};

module.exports = { Login, Register }