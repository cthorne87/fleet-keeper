const { Insurance } = require('../models');

const data = [
    {
        company: 'Progressive',
        policy: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        user_id: '1',
        vehicle_id: '1'
    },
    {
        company: 'State Farm',
        policy: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        user_id: '2',
        vehicle_id: '2'
    },
    {
        company: 'State Farm',
        policy: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        user_id: '2',
        vehicle_id: '3'
    },
    {
        company: 'Farmers',
        policy: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        user_id: '3',
        vehicle_id: '4'
    },
    {
        company: 'USAA',
        policy: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        user_id: '3',
        vehicle_id: '5'
    },
]
const seedInsurance = () => Insurance.bulkCreate(data);

module.exports = seedInsurance;