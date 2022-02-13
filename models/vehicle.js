const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

Vehicle.init (
    {
        vin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        year: {
            type: DataTypes.STRING,
            allowNull: true
        },
        make: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        model: {
            type: DataTypes.STRING
        },
        purchased: {
            type: DataTypes.DATE,
            allowNull: true
        },
        // registered: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: true,
        //     references: {
        //         model: 'registration',
        //         key: 'vin'
        //     }
        // },
        // insured: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: true,
        //     references: {
        //         model: 'insurance',
        //         key: 'vin'
        //     }
        // },
        // user_id:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
    },
    {
    sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'vehicle'
    }
);

module.exports = Vehicle;