const router = require('express').Router();
const ControllerUser = require('../controllers/controllerUser');
const authNotLog = require('../middlewares/authNotLog');
const authLog = require('../middlewares/authLog');
const routerAdmin = require('./routerAdmin');


router.get('/', (req, res) => {
    if (req.session.role === 'admin') {
        res.render('homeAdmin');
    } else if (req.session.role === 'user'){
        res.render('homeUser');
    } else {
        res.render('homeGuest')
    }
})

router.get('/register', authNotLog, ControllerUser.formRegister)

router.post('/register', authNotLog, ControllerUser.register)

router.get('/login', authNotLog, ControllerUser.formlogin)

router.post('/login', authNotLog, ControllerUser.login)

router.get('/logout', ControllerUser.logout)

router.get('/list', authLog, ControllerUser.findPackagesUser)

router.get('/order/:id', authLog, ControllerUser.formOrderUser)

router.post('/order/:id', authLog, ControllerUser.OrderUser)

router.get('/myorder', authLog, ControllerUser.MyOrder)

router.use('/admin', routerAdmin)


module.exports = router;