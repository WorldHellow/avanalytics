var Sequelize = require('sequelize');
var config = require('../config/environment');

var sqlConnect = new Sequelize(config.sql.database, config.sql.user, config.sql.password, config.sql.options);

sqlConnect.addHook('beforeUpdate', function(model, options)
{
  // Do stuff
  if(!model.modified_by)
    model.modified_by = 'system';
});

module.exports = sqlConnect;
