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
var fs = require("fs");

exports.getDemoVideos = function(req, res)
{
    res.send({
      videos: [
        {
          videoId: 1,
          publishedAt: "2017-09-09T23:38:21.000Z",
          title: "ARY News - Part 01",
          description: "1st part of an ARY News Broadcast clip.",
          thumbnails: {
            default: {
              url: "videos/thumbnails/001.png",
            },
            medium: {},
            high: {},
          },
          url: "videos/001.mp4",
        },
        {
          videoId: 2,
          publishedAt: "2017-09-09T23:38:21.000Z",
          title: "ARY News - Part 02",
          description: "2nd part of an ARY News Broadcast clip.",
          thumbnails: {
            default: {
              url: "videos/thumbnails/002.png",
            },
            medium: {},
            high: {},
          },
          url: "videos/002.mp4",
        },
        {
          videoId: 3,
          publishedAt: "2017-09-09T23:38:21.000Z",
          title: "ARY News - Part 03",
          description: "3rd part of an ARY News Broadcast clip.",
          thumbnails: {
            default: {
              url: "videos/thumbnails/003.png",
            },
            medium: {},
            high: {},
          },
          url: "videos/003.mp4",
        },
        {
          videoId: 4,
          publishedAt: "2017-09-09T23:38:21.000Z",
          title: "ARY News - Part 04",
          description: "4th part of an ARY News Broadcast clip.",
          thumbnails: {
            default: {
              url: "videos/thumbnails/004.png",
            },
            medium: {},
            high: {},
          },
          url: "videos/004.mp4",
        },
      ],
  });
};
exports.getCelebrities = function(req, res)
{
  fs.readFile("public/celebrities/labels.json", "utf8", function(err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
}
