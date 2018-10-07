const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    studentId: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    transcript: {
        type: Array
    }

});

module.exports = User = mongoose.model('user',UserSchema);