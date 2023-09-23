
const LogError = function(err, req, res, next) {
    console.error(err.status, err.stack) 
    next(err)
  }

module.exports = { LogError }