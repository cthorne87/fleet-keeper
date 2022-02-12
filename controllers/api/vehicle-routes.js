const router = require('express').Router();
const { Vehicle } = require('../../models');


//create
router.post('/', (req, res) => {
    let lookupVehicle = require('lookup_vehicle');

   let vehicle = await lookupVehicle
      .lookup(req.body.vin)
      
   let vehicleData = await vehicle.create({
        make:vehicle.Results[0].Make,
        
        
        
        // model: req.body.model,
        
    })
})

//show all vehicles



//show single vehicle
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
router.delete('/:vin', (req, res) => {
    Vehicle.destroy({
        where: {
            vin: req.params.vin
        }
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
})

module.exports = router;