<<<<<<< HEAD
const { Users } = require('../models');
const checkPass = require('../helpers/checkPass');
class ControllerUser {
    static formlogin(req, res){
        res.render('login', {data:null, error:null});
    }

    static login(req, res){
        let error = [];
        for(let key in req.body){
            if (req.body[key] === '' || req.body[key] === undefined) {
                error.push(`${key} harus diisi!`);
            }
        }
        if (error.length === 0) {
            Users.findOne({
                where: {
                    username: req.body.username
                }
            })
            .then((data) => {
                if (data) {
                    if (checkPass(req.body.password, data.password)) {
                        req.session.username = data.username;
                        req.session.role = data.role;
                        res.redirect('/')
                    } else {
                        error.push('Password Salah')
                        res.render('login', {data:req.body, error})
                    }
                } else {
                    error.push('Username Salah')
                    res.render('login', {data:req.body, error})
                }
            }).catch((err) => {
                res.send('err')
            });
        } else {
            res.render('login', {data:req.body, error})
        }
    }

    static logout(req, res){
        req.session.destroy(err=>{
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }

    static formRegister(req, res){
        res.render('register', {data:null, error:null});
    }

    static register(req, res) {
        Users.create(req.body)
            .then((result) => {
                req.session.username = req.body.username;
                req.session.role = 'user';
                res.redirect('/')
            })
            .catch((err) => {
                let error = [];
                err.errors.forEach(e => {
                    error.push(e.message);
                })
                res.render('register', {data:req.body, error})
            });
    }
=======
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
>>>>>>> 081eca91a8a8ed534821c19939391ce7c52f45af
}

module.exports = ControllerUser