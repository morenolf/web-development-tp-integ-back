const { ValidationError, MaxCharactersError, RepositoryFailure } = require("../models/exceptions.js");

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
      err.message = "Exceed maximum characters"
        break;  
    default:
      err.status = 500
      err.message = "Failed"
      break;
  }  
}

module.exports = { ErrorHandler }