const router = require('express').Router();
const { Insurance, Vehicle } = require('../../models');
const withAuth = require('../../utils/auth');

//get by id
router.get('/:id', withAuth, (req, res) => {
    Insurance.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Vehicle,
                attributes: ['vin', 'make', 'model']
            }
        ]
    })
        .then(insuranceData => {
            if (!insuranceData) {
                res.status(404).json({ message: 'No Insurance info found with requested id' });
            }
            res.json(insuranceData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})
//create
router.post('/', withAuth, (req, res) => {
    Insurance.create({
        company: req.body.company,
        policy_number: req.body.policy_number,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        vehicle_id: req.body.vehicle_id
    })
        .then(insuranceData => res.json(insuranceData))
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        })
})
//edit
router.put('/:id', withAuth, (req, res) => {
    Insurance.update(req.body, {
        individualHooks: true,
        where: {
            vehicle_id: req.params.id
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
            console.error(err);
            res.status(500).json(err);
        })
})
//delete
router.delete('/:id', withAuth, (req, res) => {
    Insurance.destroy({
        where: {
            vehicle_id: req.params.id
        }
    })
        .then(insuranceData => {
            if (!insuranceData) {
                res.status(404).json({ message: 'No Insurance info found with requested id' })
                return;
            }
            res.json(insuranceData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;