var express = require('express')
var userRoleRouter = express.Router()

var UserRole = require('../../models/user/role')

userRoleRouter.route('/role')
    .get((req,res,next) => {
        UserRole.find()
        .exec((err, doc) => {
            if (doc) {
                res.json({
                    status: '1',
                    msg: '',
                    result: doc
                })
            } else {
                res.json({
                    status: '0',
                    msg: '数据不存在',
                    result: ''
                })
            }
        })
    })

userRoleRouter.route('/role/add')
    .post((req,res,next) => {
        UserRole.findOne({roleName:req.body.roleName}).then((doc) => {
            if(doc){
                res.status(400).json({ message: "faq 巳存在" }).send(doc)
            }else{
                var roleName = req.body.roleName;

                var newRole = new UserRole({
                    roleName
                });

                newRole.save().then(role => res.json(role)).catch(err => console.log(err));
            }
        })  
    })

module.exports = userRoleRouter