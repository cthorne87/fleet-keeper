const { Registration } = require('../models');

const data = [
    {
        state: 'Utah',
        issued_date: '1/1/2022',
        expiration_date: '1/1/2023',
        user_id: '1',
        vehicle_id: '1'
    },
    {
        state: 'Utah',
        issued_date: '1/1/2022',
        expiration_date: '1/1/2023',
        user_id: '2',
        vehicle_id: '2'
    },
    {
        state: 'Utah',
        issued_date: '1/1/2022',
        expiration_date: '1/1/2023',
        user_id: '2',
        vehicle_id: '3'
    },
    {
        state: 'Utah',
        issued_date: '1/1/2022',
        expiration_date: '1/1/2023',
        user_id: '3',
        vehicle_id: '4'
    },
    {
        state: 'Utah',
        issued_date: '1/1/2022',
        expiration_date: '1/1/2023',
        user_id: '3',
        vehicle_id: '5'
    },
]
const seedRegistration = () => Registration.bulkCreate(data);

module.exports = seedRegistration;