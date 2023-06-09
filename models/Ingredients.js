const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}

Ingredients.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          amount: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          unit: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'ingredients'
    }

);

module.exports = Ingredients;