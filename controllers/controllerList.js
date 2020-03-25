const { Package } = require('../models');

class ControllerList {
    static findAll(req, res){
        Package.findAll()
        .then((result) => {
            console.log(req.session)
            res.render('list', {data:result,role:req.role})
        }).catch((err) => {
            console.log(err)
            console.log(req.session)
            res.send(err)
        });
    }
}
module.exports = ControllerList;