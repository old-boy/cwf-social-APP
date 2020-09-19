var express = require('express')
var userFollowRouter = express.Router()

var UserFollow = require('../../models/user/follow')

userFollowRouter.route('/users/follow')
    .get((req,res,next) => {
        UserFollow.find()
                  .populate('user')
                  .exec()
                  .then((doc) => {
                    if (doc) {
                        res.json({
                            status: '1',
                            msg: '',
                            result: doc
                        })
                    } else {
                        res.json({
                            status: '0',
                            msg: '没有关注用户',
                            result: ''
                        })
                    }
                  })
    })

    .post((req,res,next) => {
        var _id = `${req.params.id}`;
        UserFollow.findById({_id}).then((doc) => {
            if(!doc){
                res.status(400).json({ message: `${doc} 不存在` })
            }else{
                var followerId = req.body.userId;

                var newFollow = new UserFollow({
                    user:followerId
                })

                newFollow.save().then((doc) => res.json({ message: `${doc} 新增成功` })).catch(err=>{console.log(err)})
            }
        })
    })


module.exports = userFollowRouter