const express = require('express');
const router = express.Router();

// Users model
const User = require("../../models/User");

router.get('/', (req,res) => {
    User.find()
    .sort({lastName: 1})
    .then(users => {return res.json(users)})
});

module.exports = router;
