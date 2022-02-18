const User = require('./user');
const Vehicle = require('./vehicle');
const Insurance = require('./Insurance');
const Registration = require('./Registration');

// Associations
//----------------------------------------//
User.hasMany(Vehicle, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Vehicle.belongsTo(User);
//----------------------------------------//
Vehicle.hasOne(Insurance, {
    foreignKey: 'vehicle_id',
    onDelete: 'CASCADE'
});
Insurance.belongsTo(Vehicle);
//----------------------------------------//
Vehicle.hasOne(Registration, {
    foreignKey: 'vehicle_id',
    onDelete: 'CASCADE'
});
Registration.belongsTo(Vehicle);


module.exports = { User, Vehicle, Insurance, Registration };