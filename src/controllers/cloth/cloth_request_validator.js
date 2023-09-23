const { query, param } = require('express-validator')

const ValidateClothRequest = [
    query("page").trim().not().isEmpty().isNumeric({ min: 1}).withMessage("invalid page"),
    query("limit").trim().not().isEmpty().isNumeric({ min: 1, max: 10 }).withMessage("invalid limit"),
    param("type").trim().not().isEmpty().withMessage("invalid cloth type")
]

module.exports = { ValidateClothRequest }