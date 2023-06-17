const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init(
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
          instructions: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          serving: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          recipeImage: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'recipes'
    }

);

module.exports = Recipes;