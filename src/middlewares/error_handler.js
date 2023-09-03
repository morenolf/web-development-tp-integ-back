const errorHandler = function(error, request, response, next) {
    console.log( `error ${error.message}`) 
    const status = error.status || 500
    response.status(status).send("FAILED")
  }

module.exports = { errorHandler }