var express = require('express');
var router = express.Router();
var userService = require('../services/user');

/* GET users listing. */
router.get('/info', function(req, res) {
  return userService.getUserInfo(req, res)
});


router.get('/contact/list', function(req, res) {
  return userService.getUserContactList(req, res)
});

module.exports = router;
