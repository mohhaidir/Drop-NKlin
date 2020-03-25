'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Transaction extends Model {

  }

  Transaction.init({
    dateTransaction: DataTypes.DATEONLY,
    estimateDate: DataTypes.DATEONLY,
    totalWeight: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PackageId: DataTypes.INTEGER
  }, {sequelize});
  
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};