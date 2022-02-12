const router = require('express').Router();
const { Vehicle, Registration, Insurance } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Vehicle.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'vin',
            'make',
            'model'
        ],
        include: [
            {
                model: Registration,
                attributes: ['id', 'state', 'issued_date', 'expiration_date']
            },
            {
                model: Insurance,
                attributes: ['id', 'company', 'policy_number', 'start_date', 'end_date']
            }
        ]
    })
        .then(vehicleData => {
            const vehicles = vehicleData.map(vehicle => vehicle.get({ plain: true }));
            res.render('dashboard', vehicles);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;