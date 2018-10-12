const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const courses = require('./routes/api/courses');
const users = require('./routes/api/users');

const app = express();

// bodyparser middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch( err => console.error(err));

    /**
     * This is used to allow requests from the front-end to the backend
     */
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

    
/**
 * Below is where we will be defining the routes
 * what this does is, when someone makes a request to a specific
 * addres, we send process that api request in the corresponding route
 * to handle that.
 */
app.use('/api/courses',courses);
app.use('/api/users',users);

// the port is either is the port for a platform such as Heroku, or the port 5000 on the localhost
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));