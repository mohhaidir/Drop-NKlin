const { Package, Transaction, Users } = require('../models');

class ControllerList {
    static findList(req, res) {
        Package.findAll({ order: [['duration', 'ASC']] })
            .then((result) => {
                res.render('listAdmin', { data: result })
            }).catch((err) => {
                res.send(err)
            });
    }

    static formAddPackage(req, res) {
        res.render('formAddPackage', { data: null, error: null });
    }

    static AddPackage(req, res) {
        Package.create({
            name: req.body.name,
            price: req.body.price,
            urlIMG: req.file.path,
            duration: req.body.duration
        })
            .then((result) => {
                res.redirect('/admin/list');
            }).catch((err) => {
                res.send(err);
            });
    }

    static formEditPackage(req, res) {
        Package.findByPk(req.params.id)
            .then((result) => {
                res.render('formEditPackage', { data: result, error: null });
            }).catch((err) => {
                res.send(err)
            });
    }

    static updatePackage(req, res) {
        let update = {
            name: req.body.name,
            price: req.body.price,
            duration: req.body.duration
        };
        if (req.file !== undefined) {
            update.urlIMG = req.file.path
        }
        Package.update(update, { where: { id: req.params.id } })
            .then((result) => {
                res.redirect('/admin/list');
            }).catch((err) => {
                res.render('formEditPackage', { data: update, error: err.errors })
            });
    }

    static deletePackage(req, res) {
        Package.destroy({ where: { id: req.params.id } })
            .then((result) => {
                res.redirect('/admin/list');
            }).catch((err) => {
                res.send(err);
            });
    }

    static findTransaction(req, res) {
        let data = null;
        Transaction.findAll({ attributes: ['id', 'dateTransaction', 'estimateDate', 'totalWeight', 'totalPrice', 'status', 'UserId', 'PackageId'], order: [['estimateDate', 'ASC']], where: { status: "On Process" }, include: [Users, Package] })
            .then((result) => {
                data = result;
                return Transaction.findAll({ order: [['estimateDate', 'DESC']], where: { status: "Done" }, include: [Users, Package] })
            })
            .then((result) => {
                res.render('transactionsAdmin', { data, data2: result });
            })
            .catch((err) => {
                res.send(err)
            });
    }

    static changedone(req, res) {
        Transaction.update({ status: "Done" }, { where: { id: req.params.id } })
            .then((result) => {
                res.redirect('/admin/transaction');
            }).catch((err) => {
                res.send(err)
            });
    }
}
module.exports = ControllerList;