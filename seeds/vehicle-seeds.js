const { Vehicle } = require('../models');

const data = [
    {
        vin: 'WVVWBW7AH5CV004721',
        purchased: '2016',
        registered: 'yes',
        insured: 'yes'
    },

]

const seedVehicle = () => Vehicle.bulkCreate(data);

module.exports = seedVehicle;