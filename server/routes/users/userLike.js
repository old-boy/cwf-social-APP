var express = require('express')
var userLikeRouter = express.Router()

var UserLike = require('../../models/user/liked')

userLikeRouter.route('/users/follow')
    .get((req,res,next) => {
        UserLike.find()
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
                            msg: '没有收藏用户',
                            result: ''
                        })
                    }
                  })
    })

    .post((req,res,next) => {
        var _id = `${req.params.id}`;
        UserLike.findById({_id}).then((doc) => {
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


module.exports = userLikeRouter