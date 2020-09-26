var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./routes/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);

// Handles any requests that don't match the ones above and redirects them to
// the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = app;
