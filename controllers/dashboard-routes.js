const router = require('express').Router();
const { append } = require('express/lib/response');
const { Vehicle, Registration, Insurance } = require('../models');
const withAuth = require('../utils/auth');



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
                attributes: ['id']
            },
            {
                model: Insurance,
                attributes: ['id']
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

module.exports = router;