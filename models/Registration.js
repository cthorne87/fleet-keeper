const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Registration extends Model { }

Registration.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        issued_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // },
        vehicle_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'vehicle',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'registration'
    }
)

module.exports = Registration;