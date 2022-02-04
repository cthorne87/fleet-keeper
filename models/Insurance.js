const { Model, DataTypes } = require('sequelize');

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
            type: DataTypes.DATE,
            allowNull: false // CHECK BACK
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false // CHECK BACK
        },
        // placeholder / update when user model is made
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         modle: 'user',
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