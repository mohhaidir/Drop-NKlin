const router = require('express').Router();
const ControllerUser = require('../controllers/controllerUser');
const authNotLog = require('../middlewares/authNotLog');
const routerList = require('./routerList');

router.get('/', (req, res) => {
    if (req.session) {
        res.render('home', {role:req.session.role});
    } else {
        res.render('home', {role:null})
    }
})

router.get('/register', authNotLog, ControllerUser.formRegister)

router.post('/register', authNotLog, ControllerUser.register)

router.get('/login', authNotLog, ControllerUser.formlogin)

router.post('/login', authNotLog, ControllerUser.login)

router.get('/logout', ControllerUser.logout)

router.use('/list', routerList);

module.exports = router;