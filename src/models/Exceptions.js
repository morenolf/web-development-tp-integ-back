class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
 class MaxCharactersError extends Error {
    constructor(message) {
      super(message);
      this.name = "MaxCharactersError";
    }
  }
   

  class RepositoryFailure extends Error {
    constructor(message) {
      super(message);
      this.name = "RepositoryFailure";
    }
  }
   

  module.exports = { 
    ValidationError,
    MaxCharactersError,
    RepositoryFailure
  }