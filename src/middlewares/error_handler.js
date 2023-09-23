const { ValidationError, MaxCharactersError, CharactersNotFound, UserNotAllowed, ClothNotFound, UserNotFound, UserAlreadyExist } = require("../models/exceptions.js");

const ErrorHandler = function(err, req, resp, next) {
    ValidateException(err)
    resp.status(err.status).json({message: err.message})
  }

const ValidateException = function(err) {
  switch(err.name){
    case ValidationError.name:
      err.status = 500
      err.message = "Failed to validate request"
      break;
    case MaxCharactersError.name:
      err.status = 500
      err.message = "Maximum characters creation exceeded"
      break;  
    case CharactersNotFound.name:
      err.status = 404
      err.message = "Characters not found"
      break;        
    case ClothNotFound.name:
      err.status = 404
      err.message = "Cloth not found"
      break;
    case UserNotAllowed.name:
      err.status = 401
      err.message = "Forbbiden"
      break;
    case UserNotFound.name:
      err.status = 404
      err.message = "User not found"
      break;
    case UserAlreadyExist.name:
      err.status = 409
      err.message = "Conflict with user"
      break;
    default:
      err.status = 500
      err.message = "Failed"
      break;
  }  
}

module.exports = { ErrorHandler }