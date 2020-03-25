const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/list', ControllerUser.listPackage)
router.get('/cart', ControllerUser.cart)

// router.post('/login', ControllerUser.login)
// router.get('/logout', ControllerUser.logout)

// router.post('/login', ControllerUser.register)
// router.get('/logout', ControllerUser.logout)

module.exports = router