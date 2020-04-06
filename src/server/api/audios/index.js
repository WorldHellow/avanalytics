'use strict';

var express = require('express');
var controller = require('./audio');

var router = express.Router();

router.get('/getAudioData', controller.getAudioData);

module.exports = router;
