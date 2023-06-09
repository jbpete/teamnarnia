const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diet extends Model {}

Diet.init(
    {
       id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          vegetarian: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          vegan: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cheap: {
            type: DataTypes.STRING,
            allowNull: false,
          },

    },
    {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'diet'
    }

);

module.exports = Diet;