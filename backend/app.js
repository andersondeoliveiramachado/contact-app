var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/users');
var authRouter = require('./routes/auth');


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/user', userRouter);
app.use('/auth', authRouter);

// Handles any requests that don't match the ones above and redirects them to
// the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = app;
