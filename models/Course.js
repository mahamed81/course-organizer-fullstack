const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schea 
const CourseSchema = new Schema({
    CourseDepartmentLong: {
        type: String,
        required: true
    },
    CourseDepartmentShort: {
        type: String
    },
    CourseNumber: {
        type: String
    },
    CourseTitle: {
        type: String
    },
    CourseCredit: {
        type: String
    },
    CourseDescription: {
        type: String
    },
    CourseCore: {
        type: String
    },
    CoursePrerequisite: {
        type: String
    },
    CourseID: {
<<<<<<< HEAD
        type: Number,
        required: true
=======
        type: Number
>>>>>>> origin/Transcript
    }
});

/**
 * Exporting the model we created based on the schema we made
 * for it above!
 */
module.exports = Course = mongoose.model('course',CourseSchema);