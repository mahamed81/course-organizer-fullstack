const express = require('express');
const router = express.Router();

// Course Model
const Course = require('../../models/Course');

// @route GET api/courses
// @desc Get all courses
// @access Public 
router.get('/', (req,res) => {
    Course.find()
        .sort({date: -1})
        .then(courses => res.json(courses))
});

// @route Post api/courses
// @desc Create a course
// @access Public 
router.post('/', (req,res) => {
    const newCourse = new Course({
        name: req.body.name,
        courseNum: req.body.courseNum,
        courseDep: req.body.courseDep
    });

    newCourse.save().then(course => res.json(course));
});


module.exports = router;