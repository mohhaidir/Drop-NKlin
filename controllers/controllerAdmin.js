const { Package } = require('../models');

class ControllerList {
    static findList(req, res){
        Package.findAll()
        .then((result) => {
            res.render('listAdmin', {data:result})
        }).catch((err) => {
            res.send(err)
        });
    }

    static formAddPackage(req, res){
        res.render('formAddPackage', {data:null, error:null});
    }
}
module.exports = ControllerList;