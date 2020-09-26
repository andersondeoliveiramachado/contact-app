var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/redirect', function(req, res, next) {
    res.send('redirect');
});

router.get('/callback', function(req, res, next) {
    res.send('callback');
});


module.exports = router;
