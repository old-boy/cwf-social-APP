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


module.exports = UserFollow