"use strict";

// Development specific configuration
// ==================================
module.exports = {
  sql: {
    database: "avanalytics",
    user: "root",
    password: "",
    options: {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
    },
  },

  seedDB: false,
};
