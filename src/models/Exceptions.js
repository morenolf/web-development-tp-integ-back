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
   
class CharactersNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "CharactersNotFound";
  }
}

class ClothNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "CharactersNotFound";
  }
}

class UserNotAllowed extends Error {
  constructor(message) {
    super(message);
    this.name = "Forbbiden";
  }
}

class UserNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "User not found";
  }
}

class UserAlreadyExist extends Error {
  constructor(message) {
    super(message);
    this.name = "UserAlreadyExist";
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
  CharactersNotFound,
  ClothNotFound,
  UserNotAllowed,
  UserNotFound,
  UserAlreadyExist,
  RepositoryFailure
}