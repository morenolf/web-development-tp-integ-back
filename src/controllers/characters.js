const asyncHandler = require("express-async-handler");
const charactersRequestValidator = require("../controllers/charactersRequestValidator.js");

const Characters = asyncHandler(async (req, res, next) => {
    //throw new Error('An error occurred');


    res.send("ok");
});

const CreateCharacter = asyncHandler(async (req, res, next) => {
    let errors = charactersRequestValidator.CreateCharacterCheck(req); 
    if ( !errors.isEmpty()) {
        console.log(errors.array());
        throw new ValidationError('An error occurred');
    }

    

    res.send("ok");
});

module.export = {
    Characters,
    CreateCharacter
}