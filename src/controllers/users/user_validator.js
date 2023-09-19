const { body } = require('express-validator')

const ValidateLogin = [
    body('email').trim().not().isEmpty().withMessage("invalid mail"),
    body('password').trim().not().isEmpty().withMessage("invalid user name")
]

const ValidateRegister = [
    body('email').trim().not().isEmpty().withMessage("invalid mail"),
    body('name').trim().not().isEmpty().withMessage("invalid user name"),
    body('password').trim().not().isEmpty().withMessage("invalid user name")
]

module.exports = { ValidateLogin, ValidateRegister }