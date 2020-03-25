'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Package extends Model {

  }

  Package.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    urlIMG: DataTypes.STRING
  }, { sequelize });

  Package.associate = function (models) {
    // associations can be defined here
    Package.hasMany(models.Transaction)
    Package.belongsToMany(models.Users,{through:models.Transaction, foreignKey:`PackageId`});
  };
  return Package;
};