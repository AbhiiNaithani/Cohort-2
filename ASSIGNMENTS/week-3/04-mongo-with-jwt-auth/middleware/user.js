const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const actualToken = words[1];
    try{
        jwt.verify(actualToken, JWT_SECRET);
        next();
    }
    catch(e){
        res.status(403).json({
            msz : `User dosen't exist`
        });
    }
}

module.exports = userMiddleware;