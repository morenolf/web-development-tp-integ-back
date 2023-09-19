const jwt = require('jsonwebtoken')

const VerifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) throw new UserNotAllowed("Failed to validate user");
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        throw new UserNotAllowed("Failed to validate user");
    }
}

module.exports = { VerifyToken }