const { Model, Datatypes } = require('sequelize');
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
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        issued_date: {
            type: Datatypes.DATEONLY,
            allowNull: false
        },
        expiration_date: {
            type: Datatypes.DATEONLY,
            allowNull: false
        },
        // placeholder / update when user model is made
        // user_id: {
        //     type: Datatypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
        // placeholder / update when vehicle model is made
        // vehicle_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'vehicle',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'registration'
    }
)

module.exports = Registration;