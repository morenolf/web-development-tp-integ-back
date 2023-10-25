const { body, param } = require('express-validator')
var ObjectId = require('mongoose')

const UserIdValidator = [
    param("userId").trim().not().isEmpty().withMessage("invalid user id")
]

const GetCharacterValidator = [
    param("id").trim().not().isEmpty().withMessage("invalid character id")
]


const CreateCharacterCheck = [
    param('userId').trim().not().isEmpty().withMessage("invalid user id"),
    body('name').trim().not().isEmpty().withMessage("invalid name"),
    //body('gender').trim().not().isEmpty().withMessage("invalid gender"),
]

const UpdateCharacterCheck = [
    param('id').trim().not().isEmpty().withMessage("invalid character id"),
    body('name').trim().not().isEmpty().withMessage("invalid name"),
]

const DeleteCharacterCheck = [
    param('id').trim().not().isEmpty().withMessage("invalid character id"),
]

module.exports = {
    UserIdValidator,
    GetCharacterValidator,
    CreateCharacterCheck,
    UpdateCharacterCheck,
    DeleteCharacterCheck
}