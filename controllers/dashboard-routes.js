const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard');
})

router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/vehicle-new', (req, res) => {
    res.render('vehicle-new');
})

module.exports = router;