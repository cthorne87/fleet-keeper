const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.PORT_NAME
});

module.exports = sequelize;