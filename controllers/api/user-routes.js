const router = require('express').Router();
const { User } = require('../../models')

// GET /api/users by id
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then( userData => {
        if (!userData) {
            res.status(404).json({ message: 'No User info found'})
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// create route
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.email
    })
        .then(insuranceData => res.json(insuranceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
// edit route
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHook: true,
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if(!userData) {
                res.status(404).json({message: 'No User info found with requested id'});
                return; 
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
// deleting
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'No User info found with requested id' })
                    return;
                }
                res.json(userData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    })
})
module.exports = router;