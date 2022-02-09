const router = require('express').Router();
const { Insurance } = require('../../models');

//get by user

//get by id
router.get('/:id', (req, res) => {
    Insurance.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(insuranceData => {
            if (!insuranceData) {
                res.status(404).json({ message: 'No Insurance info found with requested id' });
            }
            res.json(insuranceData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
//create
router.post('/', (req, res) => {
    Insurance.create({
        company: req.body.company,
        policy: req.body.policy,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    })
        .then(insuranceData => res.json(insuranceData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})
//edit
router.put('/:id', (req, res) => {
    Insurance.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(insuranceData => {
            if (!insuranceData) {
                res.status(404).json({ message: 'No Insurance info found with requested id' });
                return;
            }
            res.json(insuranceData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
//delete
router.delete('/:id', (req, res) => {
    Insurance.destroy({
        where: {
            id: req.params.id
        }
            .then(insuranceData => {
                if (!insuranceData) {
                    res.status(404).json({ message: 'No Insurance info found with requested id' })
                    return;
                }
                res.json(insuranceData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    })
})

module.exports = router;