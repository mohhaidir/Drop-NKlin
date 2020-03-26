'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Transaction extends Model {
    formatRp(){
      let str = this.totalPrice.toString();
      let count = 1;
      let temp = '';
      for (let i = str.length; i > 0; i--) {
          if (i % 3 === 0 && i !== str.length) {
              temp += '.';
          }
          temp += str[count-1];
          count++;
      }
      return `Rp ${temp}`;
    }
    formatKg(){
      return `${this.totalWeight} kg`;
    }
  }

  Transaction.init({
    dateTransaction: DataTypes.DATEONLY,
    estimateDate: DataTypes.DATEONLY,
    totalWeight: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Berat harus diisi!"
        }
      }
    },
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PackageId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate:(model,option) => {
        model.status = 'On Process'
      }
    }
  });
  
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Users);
    Transaction.belongsTo(models.Package);
  };
  return Transaction;
};