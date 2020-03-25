'use strict';
const hash = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Users extends Model { }
  Users.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name harus diisi!"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Username harus diisi!"
        }
      }
    },
    password: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "Password harus diisi!"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Email harus diisi!"
        },
        isEmail: {
          msg: "Format harus email!"
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    sequelize,
    hooks: {
      beforeCreate:(model,option) => {
        model.password = hash(model.password)
        model.role = 'user'
      }
    }
   });

  Users.associate = function (models) {
    // associations can be defined here
    Users.hasMany(models.Transaction)
    Users.belongsToMany(models.Package,{through:models.Transaction, foreignKey:`UserId`});
  };
  return Users;
};