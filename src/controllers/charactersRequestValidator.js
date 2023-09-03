const { body } = require('express-validator/check')

const CreateCharacterCheck = () => { 
    return [
        body('name').trim().not().isEmpty().whitMessage 
        ('this field is required')
    ]
}
module.export = {
    CreateCharacterCheck
}