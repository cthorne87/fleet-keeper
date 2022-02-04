const router = require('express').Router();

const insuranceRoutes = require('./insurance-routes');

router.use('/insurance', insuranceRoutes);

module.exports = router;