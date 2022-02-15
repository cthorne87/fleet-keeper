const router = require('express').Router();
const { Vehicle, Registration, Insurance } = require('../models');
const withAuth = require('../utils/auth');

// Single vehicle page
router.get('/:id', withAuth, (req, res) => {
    Vehicle.findOne({
        where: {
            id: req.params.id // or vin
        },
        attributes: [
            'id',
            'vin',
            'type',
            'year',
            'make',
            'model',
            'purchased',
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

module.exports = router;