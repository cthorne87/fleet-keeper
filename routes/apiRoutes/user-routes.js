const router = require('express').Router();
const { User } = require('../../models')

// GET /api/users
router.get('/', (req, res) => {
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;