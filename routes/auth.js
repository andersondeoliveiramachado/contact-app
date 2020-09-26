var express = require('express');
var router = express.Router();
var authService = require('../services/auth')

/* GET home page. */
router.get('/redirect', function (req, res) {
    res.send({authUrl: authService.generateAuthUrl(res)});
});

router.get('/callback', function (req, res) {
    return authService.handleCallback(req, res);
});


module.exports = router;
