const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

Vehicle.init (
    {
        vin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING
        },
        purchased: {
            type: DataTypes.DATE,
            allowNull: true
        },
        registered: {
            type: DataTypes.BINARY,
            allowNull: true,
            references: {
                model: 'registration',
                key: 'vin'
            }
        },
        insured: {
            type: DataTypes.BINARY,
            allowNull: true,
            references: {
                model: 'insurance',
                key: 'vin'
            }
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
    sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'vehicle'
    }
);

module.exports = Vehicle;