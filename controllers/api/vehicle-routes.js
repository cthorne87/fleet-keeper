const router = require('express').Router();
const { reject } = require('bcrypt/promises');
const { Vehicle, Registration } = require('../../models');


//create
router.post('/', (req, res) => {
    let lookupVehicle = require('lookup_vehicle');
console.log(console.log(req.body))
   lookupVehicle.lookup(req.body.vin)
   .then( (response) =>{
    let vehicleData = response.data.Results[0]   
    console.log(response.data.Results);
    console.log({
        vin:vehicleData.SuggestedVIN,
         type:vehicleData.VehicleType, 
         year:vehicleData.ModelYear,
         make:vehicleData.Make,
         model:vehicleData.Model,
        })
    Vehicle.create({
        vin:req.body.vin,
         type:vehicleData.VehicleType, 
         year:vehicleData.ModelYear,
         make:vehicleData.Make,
         model:vehicleData.Model,
         user_id: req.session.user_id,
        //  purchased: req.body.date
        })
   }) .catch(e => console.log(e))   
})


module.exports = router;