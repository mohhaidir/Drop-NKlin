const router = require('express').Router();
const ControllerAdmin = require('../controllers/controllerAdmin')

router.get('/list', ControllerAdmin.findList);

router.get('/list/add', ControllerAdmin.formAddPackage);


module.exports = router;