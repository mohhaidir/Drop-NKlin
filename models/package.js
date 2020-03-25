'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Package extends Model {

  }

  Package.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    urlIMG: DataTypes.STRING
  }, {sequelize});
  
  Package.associate = function(models) {
    // associations can be defined here
  };
  return Package;
};