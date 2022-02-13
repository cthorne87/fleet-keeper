const router = require('express').Router();
const { Vehicle, Registration, Insurance } = require('../models');
const withAuth = require('../utils/auth');

// For Dashboard
router.get('/', withAuth, (req, res) => {
    Vehicle.findAll({
        where: {
            user_id: req.session.user_id
        },
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
            console.info(vehicles);
            res.render('dashboard', { vehicles, loggedIn: true });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

// Single vehicle page
router.get('/vehicle/:id', withAuth, (req, res) => {
    Vehicle.findOne({
        where: {
            id: req.params.id // or vin
        },
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
            const vehicle = vehicleData.get({ plain: true });
            console.info(vehicle);
            res.render('vehicle-full', { vehicle, loggedIn: true });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;