const { body, param } = require('express-validator')
var ObjectId = require('mongoose')

const UserIdValidator = [
    param("userId").trim().not().isEmpty().withMessage("invalid name")
]

const CreateCharacterCheck = [
    param('userId').trim().not().isEmpty().withMessage("invalid user id"),
    body('name').trim().not().isEmpty().withMessage("invalid name"),
    body('cloth').exists().withMessage("invalid cloth"),
    body('cloth.head.id').trim().not().isEmpty()
    .custom(value => {
            return ObjectId.isValidObjectId(value);
      }).withMessage("invalid head id"),
    body('cloth.head.name').trim().not().isEmpty().withMessage("invalid head name"),
    body('cloth.head.type').trim().not().isEmpty().withMessage("invalid head type"),
    body('cloth.head.url').trim().not().isEmpty().withMessage("invalid head url"),
    body('cloth.body.id').trim().not().isEmpty()
    .custom(value => { return ObjectId.isValidObjectId(value); }).withMessage("invalid body id"),
    body('cloth.body.name').trim().not().isEmpty().withMessage("invalid body name"),
    body('cloth.body.type').trim().not().isEmpty().withMessage("invalid body type"),
    body('cloth.body.url').trim().not().isEmpty().withMessage("invalid body url"),
    body('cloth.legs.id').trim().not().isEmpty()
    .custom(value => { return ObjectId.isValidObjectId(value); }).withMessage("invalid legs id"),
    body('cloth.legs.name').trim().not().isEmpty().withMessage("invalid legs name"),
    body('cloth.legs.type').trim().not().isEmpty().withMessage("invalid legs type"),
    body('cloth.legs.url').trim().not().isEmpty().withMessage("invalid legs url"),
    body('cloth.feet.id').trim().not().isEmpty()
    .custom(value => { return ObjectId.isValidObjectId(value); }).withMessage("invalid feet id"),
    body('cloth.feet.name').trim().not().isEmpty().withMessage("invalid feet name"),
    body('cloth.feet.type').trim().not().isEmpty().withMessage("invalid feet type"),
    body('cloth.feet.url').trim().not().isEmpty().withMessage("invalid feet url"),
]

module.exports = {
    CreateCharacterCheck, 
    UserIdValidator
}