const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        time: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
    }
);

module.exports = Workout;