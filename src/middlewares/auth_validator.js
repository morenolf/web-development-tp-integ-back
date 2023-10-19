const jwt = require('jsonwebtoken')
const { UserNotAllowed } = require("../models/exceptions.js");

const VerifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace("Bearer ","");
        if (!token) throw new UserNotAllowed("Failed to validate user");

        const verified = jwt.verify(token, "TESTING TOKEN KEY")
        req.user = verified
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { VerifyToken }