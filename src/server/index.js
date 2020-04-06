/**
 * Main application file
 */

"use strict";

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const express = require("express");
var cors = require("cors");
var config = require("./config/environment");
var socketSetup = require("./utils/socket");

process.env.TZ = "UTC";

const app = express();
app.use(cors());

// var modulesServer = require('http').createServer(app);
// var server = require('http').createServer(app);

// exports.socket = require("socket.io")(modulesServer);
// const io = require("socket.io")(modulesServer);
// exports.socket_local = io_local;

require("./config/express")(app);
require("./routes")(app);

const server = app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
/*
modulesServer.listen(config.MODULES_PORT, config.ip, () =>
console.log(`Listening to modules on port ${config.MODULES_PORT}!`)
);
*/

const io_local = require("socket.io")(server);
exports.socket = io_local;

// socketSetup.fromModuleClient(io);
socketSetup.fromClient(io_local);

exports = module.exports = app;
