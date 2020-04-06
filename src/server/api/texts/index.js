'use strict';

var express = require('express');
var controller = require('./text');

var router = express.Router();

router.get('/getTextData', controller.getTextData);

module.exports = router;
