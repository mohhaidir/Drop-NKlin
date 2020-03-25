const router = require('express').Router();
const ControllerUser = require('../controllers/controllerUser');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/register', (req, res) => {

})

router.get('/login', ControllerUser.login)

module.exports = router;