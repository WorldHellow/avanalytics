/**
 * Express configuration
 */

'use strict';

var express = require('express');

module.exports = function(app) {

  app.use(express.static("dist"));
  app.use("/public", express.static("public"));

  app.get("/api/getUsername", (req, res) =>
    res.send({ username: os.userInfo().username })
  );

  app.get("/", (req, res) => res.send({ username: os.userInfo().username }));

};
