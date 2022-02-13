const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedVehicles = require('./vehicle-seeds');
const seedInsurance = require('./insurance-seeds');
const seedRegistration = require('./registration-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedVehicles();
    await seedInsurance();
    await seedRegistration();
}

seedAll();