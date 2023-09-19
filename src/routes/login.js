const express = require("express");
const router = express.Router();
const { Login, Register} = require("../controllers/user.js")
const { ValidateLogin, ValidateRegister } = require("../controllers/user_validator.js")

router.post('/login', ValidateLogin, Login)

router.post('/register', ValidateRegister, Register)