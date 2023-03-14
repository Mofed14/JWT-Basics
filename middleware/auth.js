const { UnauthenticatedError } = require('../errors/index')
const jwt = require('jsonwebtoken');

const authorizationMiddleware = (req, res, next)=> {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bareer')){
        throw new UnauthenticatedError('No token provided')
    }

    // console.log(authHeader);

    // To Cut the Bareer from the token
    const token = authHeader.split(' ')[1]
    // console.log(token)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // I added a property called (user) to request (req) to can access this data anywhere
        const { id, username } = decoded
        req.user = { id, username }
        next()
        
    } catch (error) {
        throw new UnauthenticatedError('Not Authorized to access this route')
    }
}

module.exports = authorizationMiddleware