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
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        issued_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
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
            references: {
                model: 'vehicle',
                key: 'vin'
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