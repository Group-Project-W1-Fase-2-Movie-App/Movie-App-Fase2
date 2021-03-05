'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/password-handler.js')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    getCity() {
      return this.city;
    }
  };
  Users.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "email is required"
        },
        isEmail: {
          args: true,
          msg: "email format isnt valid"
        }
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password is required"
        },
        min: {
          args: 4,
          msg: "Password has to be at least 4 characters"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(data, opt) {
        data.password = hash(data.password)
      }
    },
    sequelize,
    modelName: 'Users',
  });
  return Users;
};