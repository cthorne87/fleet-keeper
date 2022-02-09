const User = require('./user');
const Vehicle = require('./Vehicle');
const Insurance = require('./Insurance');
const Registration = require('./Registration');

// Associations

Insurance.belongsTo(User, {
    foreignKey: 'user_id'
})

Insurance.belongsTo(Vehicle, {
    foreignKey: 'vehicle_id'
});

Registration.belongsTo(User, {
    foreignKey: 'user_id'
})

Registration.belongsTo(Vehicle, {
    foreignKey: 'vehicle_id'
})

module.exports = { User, Vehicle, Insurance, Registration };