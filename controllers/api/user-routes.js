const router = require('express').Router();
const { User, Vehicle, Insurance, Registration } = require('../../models')

// GET /api/users by id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
            model: Vehicle,
            attributes: ['id', 'make', 'model'],
            include: {
                model: Insurance,
                attributes: ['id', 'company', 'policy', 'start_date', 'end_date'],
                model: Registration,
                attributes: ['id', 'state', 'issued_date', 'expiration_date']
                },
            }
        ]
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User info found' })
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
        email: req.body.email,
        password: req.body.password
      })
        .then(userData => {
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
      
            res.json(userData);
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

// login
router.post('/login', (req, res) => {
User.findOne({
    where: {
    email: req.body.email
    }
    }).then(userData => {
        if (!userData) {
            console.error('Incorrect Email');
        res.status(400).json({ message: 'No user with that email address' });
        return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            console.error('Incorrect Password');
        res.status(400).json({ message: 'Incorrect password' });
        return;
        }

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;

        res.json({ user: userData, message: 'You are logged in' });
        });
    });
});

//logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });

// edit route
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHook: true,
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User info found with requested id' });
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