const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
// const vehicleDetails = require('./vehicle-details-routes.js');


router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);
// router.use('/details', vehicleDetails);


module.exports = router;