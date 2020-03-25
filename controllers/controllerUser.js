const { Package, Users } = require('../models')

class ControllerUser {
  static listPackage(req, res) {
    Package.findAll()
      .then(result => {
        res.render('../views/user/listUser', { item: result })
      })
      .catch(error => {
        res.send(error)
      })
  }
  // <<-- munculin list item, harga (reguler, express, santuy)
  static cart(req, res) {
    res.render('../views/user/cart')
  }
  // <<-- munculin cart / invoice belanjaan user

  static login(req, res) {
    res.render('loginForm')
  }
}

module.exports = ControllerUser