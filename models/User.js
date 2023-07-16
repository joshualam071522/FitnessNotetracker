const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}
//TODO add bycrpt check password?

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        //* add in later to require atleast 8 characters
        // validate: {
        //   len: [8],
        // },
      },
    },
    {
//TODO add a hook for bycrypt password
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );

  module.exports = User;
