const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Insurance extends Model { }

Insurance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false, //CHECK BACK
            validate: {
                len: [1]
            }
        },
        policy: {
            type: DataTypes.STRING,
            allowNull: false, // CHECK BACK
            validate: {
                len: [1]
            }
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false // CHECK BACK
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false // CHECK BACK
        },
        // placeholder / update when user model is made
        // user_id: {
        //     type: DataTypes.INTEGER,
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
        modelName: 'insurance'
    }
)

module.exports = Insurance;