const router = require('express').Router();
const { reject } = require('bcrypt/promises');
const { Vehicle, Registration, Insurance } = require('../../models');
const lookup = require('axios');


//create
router.post('/', (req, res) => {
    let lookupVehicle = require('lookup_vehicle');
    lookupVehicle.lookup(req.body.vin)
        .then(async (response) => {
            let vehicleData = response.data.Results[0]

            let newVehicle = await Vehicle.create({
                vin: req.body.vin,
                type: vehicleData.VehicleType,
                year: vehicleData.ModelYear,
                make: vehicleData.Make,
                model: vehicleData.Model,
                user_id: req.session.user_id,
                //  purchased: req.body.date
            })

            res.status(200).json(newVehicle)
        }).catch(e => {
            console.log(e)
            res.status(500).json(e)
        })
})

//edit vehicle
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

//delete vehicle
router.delete('/:id', (req, res) => {
    Vehicle.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(vehicleData => {
            if (!vehicleData) {
                res.status(404).json({ message: 'No vehicle info found with requested vin' })
                return;
            }
            res.json(vehicleData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


module.exports = router;