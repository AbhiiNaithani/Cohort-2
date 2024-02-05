const { Router, response } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isPresent = await User.findOne({ username: username, password: password});
    if(isPresent) {
        res.json({
            message : 'User already exists'
        });
    }
    else{
        await User.create({
            username: username,
            password: password
        }) 
        res.json({
            message: 'User created successfully'
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const isPresent = await User.findOne({ username: username, password: password});
    if(isPresent) {
        // console.log(JWT_SECRET);
        const token = jwt.sign({username},JWT_SECRET);
        res.json({
            token : 'Bearer ' + token,
        });
    }
    else{
        res.status(411).json({
            message: `Incorrect email and password`
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;
    const words = token.split(' ');
    const actualToken = words[1];
    const decoded = jwt.decode(actualToken);
    
    await User.updateOne({
        username: decoded.username
    },{
        "$push":{
            purchasedcourses : courseId
        }
    });
    res.json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;
    const words = token.split(' ');
    const actualToken = words[1];
    const decoded = jwt.decode(actualToken);
    
    const user = await User.findOne({username: decoded.username});

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedcourses
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router