var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const Users = require('../models/user')


module.exports = {
    signUp: function (req, res) {
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const users = new Users()
        users.username = req.body.username,
        users.password = hash,
        users.email = req.body.password
        users.save().then(data_users => {
          res.status(201).json({
            message: 'new user was created',
            data_users
          })
        }).catch(err => {
          res.status(500).json({
            message: 'error'
          })
        })
    },

    signIn: function (req, res) {
        Users.findOne({username: req.body.username}).then(data_user => {
            console.log(data_user);
            if (data_user) {
                let check = bcrypt.compareSync(req.body.password, data_user.password)
                if (check) {
                    const token = jwt.sign({email: data_user.email}, process.env.SECRET)
                    // console.log(token);
                    res.status(201).json({
                        message: 'login success',
                        data: token
                    })
                }
                else {
                    res.status(404).json({
                        message: 'password incorrect'
                    })
                }
            }
            else {
                res.status(404).json({
                    message: 'username incorrect'
                })
            }
        })
    }
}
