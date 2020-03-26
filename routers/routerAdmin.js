const router = require('express').Router();
const ControllerAdmin = require('../controllers/controllerAdmin')
const multer = require('multer');
const upload = multer({dest: './public/images/'})


router.get('/list', ControllerAdmin.findList);

router.get('/list/add', ControllerAdmin.formAddPackage);

router.post('/list/add', upload.single('myImg'), ControllerAdmin.AddPackage);

router.get('/list/edit/:id', ControllerAdmin.formEditPackage);

router.post('/list/edit/:id', upload.single('myImg'), ControllerAdmin.updatePackage);

router.get('/list/delete/:id', ControllerAdmin.deletePackage);

router.get('/transaction', ControllerAdmin.findTransaction);

router.get('/:id/status', ControllerAdmin.changedone);


module.exports = router;