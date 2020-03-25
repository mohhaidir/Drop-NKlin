const router = require('express').Router();
const ControllerList = require('../controllers/controllerList');

router.get('/', ControllerList.findAll)

module.exports = router