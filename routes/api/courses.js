const express = require('express');
const router = express.Router();

// Course Model
const Course = require('../../models/Course');

// @route GET api/courses
// @desc Get all items
// @access Public 
router.get('/', (req,res) => {
    Course.find()
        .sort({date: -1})
        .then(courses => res.json(courses))
});

module.exports = router;