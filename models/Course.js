const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schea 
const CourseSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    courseNum: {
        type: number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

/**
 * Exporting the model we created based on the schema we made
 * for it above!
 */
module.exports = Course = mongoose.model('course',CourseSchema);