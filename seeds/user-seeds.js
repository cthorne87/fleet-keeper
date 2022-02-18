const { User } = require('../models');

const data = [
    {
        email: 'lernantino@gmail.com',
        password: 'password123'
    }
]
const seedUsers = () => User.bulkCreate(data, { individualHooks: true });

module.exports = seedUsers;