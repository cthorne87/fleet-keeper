const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

Vehicle.init (
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vin: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        make: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        model: {
            type: Datatypes.STRING
        },
        user_id:{
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        insurance_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'insurance',
                key: 'id'
            }
        },
        registration_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'registration',
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