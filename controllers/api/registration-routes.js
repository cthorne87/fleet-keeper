const router = require('express').Router();
const { Registration, Vehicle } = require('../../models');
const withAuth = require('../../utils/auth');

//get by user

//get by id
router.get('/:id', withAuth, (req, res) => {
    Registration.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Vehicle,
                attributes: ['vin', 'make', 'model'],
            }
        ]
    })
        .then(registrationData => {
            if (!registrationData) {
                res.status(404).json({ message: 'No Registration info found with requested id' });
            }
            res.json(registrationData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})
//create
router.post('/', withAuth, (req, res) => {
    Registration.create({
        state: req.body.state,
        issued_date: req.body.issued_date,
        expiration_date: req.body.expiration_date,
        vehicle_id: req.body.vehicle_id
    })
        .then(registrationData => res.json(registrationData))
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})
//edit
router.put('/:id', withAuth, (req, res) => {
    Registration.update(req.body, {
        individualHooks: true,
        where: {
            vehicle_id: req.params.id
        }
    })
        .then(registrationData => {
            if (!registrationData) {
                res.status(404).json({ message: 'No Registration info found with requested id' });
                return;
            }
            res.json(registrationData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})
//delete
router.delete('/:id', withAuth, (req, res) => {
    Registration.destroy({
        where: {
            vehicleId: req.params.id
        }
    })
        .then(registrationData => {
            if (!registrationData) {
                res.status(404).json({ message: 'No Registration info found with requested id' })
                return;
            }
            res.json(registrationData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;
