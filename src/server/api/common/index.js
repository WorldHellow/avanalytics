'use strict';

var express = require('express');
var controller = require('./common');

var router = express.Router();

router.get('/getDemoVideos', controller.getDemoVideos);
router.get('/celebrities', controller.getCelebrities);

module.exports = router;
