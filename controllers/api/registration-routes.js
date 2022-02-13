const router = require('express').Router();
const { Registration, Vehicle } = require('../../models');

//get by user

//get by id
router.get('/:id', (req, res) => {
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
            console.log(err);
            res.status(500).json(err);
        })
})
//create
router.post('/', (req, res) => {
    Registration.create({
        state: req.body.state,
        issued_date: req.body.issued_date,
        expiration_date: req.body.expiration_date,
        // user_id: req.body.user_id,
        vehicle_id: req.body.vehicle_id
    })
        .then(registrationData => res.json(registrationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
//edit
router.put('/:id', (req, res) => {
    Registration.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
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
            console.log(err);
            res.status(500).json(err);
        })
})
//delete
router.delete('/:id', (req, res) => {
    Registration.destroy({
        where: {
            id: req.params.id
        }
            .then(registrationData => {
                if (!registrationData) {
                    res.status(404).json({ message: 'No Registration info found with requested id' })
                    return;
                }
                res.json(registrationData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    })
})

module.exports = router;
