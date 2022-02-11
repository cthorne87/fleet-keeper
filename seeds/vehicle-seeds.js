const { Vehicle } = require('../models');

const data = [
    {
        vin: '111111',
        make: 'Dodge',
        model: 'Challenger',
        user_id: '1'
    },
    {
        vin: '222222',
        make: 'Jeep',
        model: 'Grand Cherokee',
        user_id: '2'
    },
    {
        vin: '333333',
        make: 'Chevrolet',
        model: 'Colorado',
        user_id: '2'
    },
    {
        vin: '444444',
        make: 'Subaru',
        model: 'Outback',
        user_id: '3'
    },
    {
        vin: '555555',
        make: 'Toyota',
        model: 'Rav4',
        user_id: '3'
    }
]

const seedVehicle = () => Vehicle.bulkCreate(data);

module.exports = seedVehicle;