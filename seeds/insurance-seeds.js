const { Insurance } = require('../models');

const data = [
    {
        company: 'Progressive',
        policy_number: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        vehicle_id: '1'
    },
    {
        company: 'State Farm',
        policy_number: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        vehicle_id: '2'
    },
    {
        company: 'State Farm',
        policy_number: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        vehicle_id: '3'
    },
    {
        company: 'Farmers',
        policy_number: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        vehicle_id: '4'
    },
    {
        company: 'USAA',
        policy_number: '1234',
        start_date: '1/1/2022',
        end_date: '1/1/2023',
        vehicle_id: '5'
    },
]
const seedInsurance = () => Insurance.bulkCreate(data);

module.exports = seedInsurance;