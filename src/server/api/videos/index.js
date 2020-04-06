'use strict';

var express = require('express');
var controller = require('./video');

var router = express.Router();

router.get('/getVideoData', controller.getVideoData);

module.exports = router;
