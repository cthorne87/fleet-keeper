const router = require('express').Router();
const { append } = require('express/lib/response');
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
            'year',
            'vin',
            'make',
            'model'
        ],
        include: [
            {
                model: Registration,
                attributes: ['state']
            },
            {
                model: Insurance,
                attributes: ['policy_number']
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



router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/vehicle-new', (req, res) => {
    res.render('vehicle-new');
})
router.get('/register/:vin', (req, res) => {
    res.render('register');
})
router.get('/insure/:vin', (req, res) => {
    res.render('insure');
})

module.exports = router;