const { Vehicle } = require('../models');

const data = [
    {
        vin: '3GCEK13J68G224097',
        purchased: '2016',
        registered: 'yes',
        insured: 'yes',
        user_id: '1'
    },

]

const seedVehicle = () => Vehicle.bulkCreate(data);

module.exports = seedVehicle;