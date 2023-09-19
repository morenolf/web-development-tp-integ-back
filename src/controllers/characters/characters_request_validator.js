const { body, param } = require('express-validator')


const UserIdValidator = [
    param("userId").trim().not().isEmpty().withMessage("invalid name")
]

const CreateCharacterCheck = [
    param('userId').trim().not().isEmpty().withMessage("invalid user id"),
    body('name').trim().not().isEmpty().withMessage("invalid name"),
    body('cloth').exists().withMessage("invalid cloth"),
    body('cloth.head').trim().not().isEmpty().withMessage("invalid head"),
    body('cloth.body').trim().not().isEmpty().withMessage("invalid body"),
    body('cloth.legs').trim().not().isEmpty().withMessage("invalid legs"),
    body('cloth.feet').trim().not().isEmpty().withMessage("invalid feet")
]

module.exports = {
    CreateCharacterCheck, 
    UserIdValidator
}