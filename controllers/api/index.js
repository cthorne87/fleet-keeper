const router = require('express').Router();

const insuranceRoutes = require('./insurance-routes');
const registrationRoutes = require('./registration-routes');


router.use('/insurance', insuranceRoutes);
router.use('/registration', registrationRoutes);


module.exports = router;