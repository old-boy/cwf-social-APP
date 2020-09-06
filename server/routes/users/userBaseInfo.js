var express = require('express')
var userBaseInfoRouter = express.Router()

var UserBaseInfo = require('../../models/user/userBaseInfo')

userBaseInfoRouter.route('/info')
    .get((req,res,next) => {
        UserBaseInfo.find()
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
                        msg: `用户${doc}不存在`,
                        result: ''
                    })
                }
        })
    })

userBaseInfoRouter.route('/info/add/:id')
    .post((req,res,next) => {
        var _id = `${req.params.id}`;
        UserBaseInfo.findById({_id}).then((doc) => {
            if(!doc){
                res.status(400).json({ message: `${doc} 不存在` })
            }else{
                var gender = req.body.gender;
                var age = req.body.age;
                var constellation = req.body.constellation;
                var area = req.body.area;
                var company = req.body.company;
                var feelingStatus = req.body.feelingStatus;
                var registrationDate = req.body.registrationDate;

                var newUserInfo = new UserBaseInfo({
                    gender,
                    age,
                    constellation,
                    area,
                    company,
                    feelingStatus,
                    registrationDate
                })

                newUserInfo.save().then((doc) => res.json({ message: `${doc} 新增成功` })).catch(err=>{console.log(err)})
            }
        })
    })


module.exports = UserBaseInfo