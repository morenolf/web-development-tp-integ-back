const { query, body } = require('express-validator')

const ValidateLogin = [
    query('email').trim().not().isEmpty().withMessage("invalid mail"),
    query('password').trim().not().isEmpty().withMessage("invalid user name")
]

const ValidateRegister = [
    body('email').trim().not().isEmpty().withMessage("invalid mail"),
    body('username').trim().not().isEmpty().withMessage("invalid user username"),
    body('password').trim().not().isEmpty().withMessage("invalid password")
]

module.exports = { ValidateLogin, ValidateRegister }