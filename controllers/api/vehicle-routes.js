const router = require('express').Router();
const { reject } = require('bcrypt/promises');
const { Vehicle, Registration, Insurance } = require('../../models');
const axios = require('axios');


//create
router.post('/', (req, res) => {
    let lookupVehicle = require('axios');
  lookupVehicle.get(req.body.vin)
   .then( (response) =>{
    let vehicleData = response.data.Results[0]   

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