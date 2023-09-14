const { check, body, query } = require('express-validator')


const UserIdValidator = [
    check("name").trim().not().isEmpty().withMessage("invalid name")
    //check('name').trim().not().isEmpty().whitMessage('invalid name')
]

const CreateCharacterCheck = [
    check('userId').trim().not().isEmpty().withMessage("invalid user id")    
]

module.exports = {
    CreateCharacterCheck, 
    UserIdValidator
}