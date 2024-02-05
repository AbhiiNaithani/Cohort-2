const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    await User.updateOne({
        username,
    },{
        "$push":{
            purchasedCourses : courseId
        }
    });
    res.json({
        message: 'course pushased successfully'
    });    

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic 
    const username = req.headers.username;
    const user = await User.findOne({ username});

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses : courses
    })

});

module.exports = router