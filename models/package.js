'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Package extends Model {
    formatRp() {
      let str = this.price.toString();
      let count = 1;
      let temp = '';
      for (let i = str.length; i > 0; i--) {
        if (i % 3 === 0 && i !== str.length) {
          temp += '.';
        }
        temp += str[count - 1];
        count++;
      }
      return `Rp ${temp}`;
    }

    formatDay() {
      let value = this.duration
      return `${value} Hari`
    }
  }

  Package.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name harus diisi!"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Price harus diisi!"
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Duration harus diisi!"
        }
      }
    },
    urlIMG: DataTypes.STRING
  }, { sequelize });

  Package.associate = function (models) {
    // associations can be defined here
    Package.hasMany(models.Transaction)
    Package.belongsToMany(models.Users, { through: models.Transaction, foreignKey: `PackageId` });
  };
  return Package;
};