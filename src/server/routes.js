/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/videos', require('./api/videos'));
  app.use('/api/audio', require('./api/audios'));
  app.use('/api/text', require('./api/texts'));
  app.use('/api/common', require('./api/common'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(function (req,res) {
   res.status(404).send('No file found');
   });
};
