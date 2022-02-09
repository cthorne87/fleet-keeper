const router = require('express').Router();
const { Vehicle } = require('../../models');

//get by user

//get by id
router.get('/:id', (req, res) => {
    Vehicle.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(vehicleData => {
            if (!vehicleData) {
                res.status(404).json({ message: 'No vehicle info found with requested id' });
            }
            res.json(vehicleData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
//create
router.post('/', (req, res) => {
    Vehicle.create({
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        user_id: req.body.user_id
    })
        .then(vehicleData => res.json(vehicleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
//edit
router.put('/:id', (req, res) => {
    Vehicle.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(vehicleData => {
            if (!vehicleData) {
                res.status(404).json({ message: 'No vehicle info found with requested id' });
                return;
            }
            res.json(vehicleData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
//delete
router.delete('/:id', (req, res) => {
    Vehicle.destroy({
        where: {
            id: req.params.id
        }
            .then(vehicleData => {
                if (!vehicleData) {
                    res.status(404).json({ message: 'No vehicle info found with requested id' })
                    return;
                }
                res.json(vehicleData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    })
})

module.exports = router;