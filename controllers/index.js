const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const vehicleDetailsRoutes = require('./vehicle-details-routes');

router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/vehicle', vehicleDetailsRoutes);



module.exports = router;