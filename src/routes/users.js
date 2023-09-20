const express = require("express");
const router = express.Router();
const { Login, Register} = require("../controllers/users/users.js")
const { ValidateLogin, ValidateRegister } = require("../controllers/users/user_validator.js")

router.post('/login', ValidateLogin, Login)

router.post('/register', ValidateRegister, Register)

module.exports = router;