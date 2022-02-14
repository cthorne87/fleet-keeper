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
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        policy_number: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        end_date: {
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
        modelName: 'insurance'
    }
)

module.exports = Insurance;