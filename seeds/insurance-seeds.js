const { Insurance } = require('../models');

const data = [
    {
        company: 'Progressive',
        policy_number: '1234',
        start_date: '1-1-2022',
        end_date: '1-1-2023',
        vehicle_id: '1'
    }
]
const seedInsurance = () => Insurance.bulkCreate(data);

module.exports = seedInsurance;