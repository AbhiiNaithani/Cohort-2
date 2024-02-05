// Middleware for handling auth
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const actualToken = words[1];
    try{
        // console.log(JWT_SECRET);
        jwt.verify(actualToken, JWT_SECRET);
        next();
    }
    catch(e){
        res.status(403).json({
            msz : `Admin dosen't exist`
        });
    }
}

module.exports = adminMiddleware;