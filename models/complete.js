'use strict';
module.exports = function(sequelize, DataTypes) {
  var Complete = sequelize.define('Complete', {
    task: DataTypes.STRING
  }, {});
  return Complete;
};
