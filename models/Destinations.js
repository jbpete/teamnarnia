const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Destinations extends Model {}

Destinations.init(
    {

    },
    {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 
    }

);

module.exports = Destinations;