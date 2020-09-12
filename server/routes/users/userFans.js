var express = require('express')
var userFansRouter = express.Router()

var UserFans = require('../../models/user/fans')

userFansRouter.route('/users/fans')
    .get((req,res,next) => {
        UserFans.find()
            .populate('user')
            .exec()
            if (doc) {
                res.json({
                    status: '1',
                    msg: '',
                    result: doc
                })
            } else {
                res.json({
                    status: '0',
                    msg: '没有数据',
                    result: ''
                })
            }
    })

    .post((req,res,next) => {
        const _id = `${req.params._id}`;
        UserFans.findById({_id})
            .then((doc) => {
                if(!doc){
                    res.status(400).json({ message: `${doc} 不存在` })
                }else{
                    let fans = []
                    let user = req.body.userId;
                    
                    fans.push(user)
                    let fansNum = fans.length;

                    let newFans = new UserFans({
                        fans,
                        fansNum
                    });

                    newFans.save().then((doc) => res.json({ message: `${doc} 新增成功` })).catch(err=>{console.log(err)})
                }
            })
    })


module.exports = userFansRouter