/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var socket = require('../../index').socket;
var sequelize = require('../../utils/sqlConnector');

exports.getVideoData = function(req, res)
{
/*
      var query = "SELECT * FROM demos ";

      sequelize.query(query, {type: sequelize.QueryTypes.SELECT})
        .then(function (demos)
        {
          console.log(demos)
              // if(!demos) {
                    // return res.send(404);
              // }

              // return res.status(200).json(demos);
        }, function (err)
        {
          console.log(err)
              // if(err)
                    // return handleError(res, err);
        });
*/

      console.log('demos ')
      socket.emit('FacialRecognitionData', {target: 'demo'});
      return res.status(500).send('something here');
};
