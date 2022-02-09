const router = require('express').Router();

const insuranceRoutes = require('./insurance-routes');
const registrationRoutes = require('./registration-routes');
const userRoutes = require('./user-routes');
const vehicleRoutes = require('./vehicle-routes');

router.use('/insurance', insuranceRoutes);
router.use('/registration', registrationRoutes);
router.use('/user', userRoutes);
router.use('/vehicle', vehicleRoutes);

module.exports = router;