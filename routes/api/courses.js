const express = require('express');
const router = express.Router();

// Course Model
const Course = require('../../models/Course');

// @route GET api/courses
// @desc Get all courses
// @access Public 
router.get('/', (req,res) => {
    Course.find()
        .sort({CourseDepartmentShort: 1})
        .then(courses => {
            /**
             * This for loop gets rid of the (annoying) \n character at the end 
             * of each string that is sent from the python script!
            */
            for (let i = 0; i < courses.length; i++) {
                for (atr in courses[i]) {
                    if (atr === "CourseDepartmentShort" || atr === "CourseDepartmentLong" || atr === "CourseNumber" || atr === "CourseTitle" || atr === "CourseCredit" || atr === "CourseDescription" || atr === "CourseCore" || atr === "CoursePrerequisite") {
                        courses[i][atr] = courses[i][atr].replace(/(\r\n\t|\n|\r\t)/gm,""); 
                        //console.log(courses[i][atr])
                    }
                }
            }

           
            return res.json(courses)
        })
});

// @route GET api/courses/id
// @desc Get a course
// @access Public 
router.get('/:id', (req,res) => {
    
    console.log(req.params.id)
    Course.find({CourseID: req.params.id})
    .then(course => {
        console.log(course);
        for (atr in course) {
            if (atr === "CourseDepartmentShort" || atr === "CourseDepartmentLong" || atr === "CourseNumber" || atr === "CourseTitle" || atr === "CourseCredit" || atr === "CourseDescription" || atr === "CourseCore" || atr === "CoursePrerequisite") {
                course[atr] = course[atr].replace(/(\r\n\t|\n|\r\t)/gm,""); 
                console.log(course[atr])
            }
        }
        return res.json(course);
    })
    .catch(err => res.status(404).json({success: false}));
});

// @route GET api/courses/department/dep
// @desc Get courses for a department
// @access Public 
router.get('/department/:dep', (req,res) => {
    
    Course.find({CourseDepartmentShort: req.params.dep})
    .then(course => {console.log(course)})
    .catch(err => res.status(404).json({success: false}));
});

// @route POST api/courses
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

// @route DELETE api/courses
// @desc Delete a course
// @access Public 
router.delete('/:id', (req,res) => {
    Course.findById(req.params.id)
    .then(course => course.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;