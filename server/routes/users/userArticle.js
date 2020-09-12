var express = require('express')
var userArticleRouter = express.Router()

var UserArticle = require('../../models/user/article')

userArticleRouter.route('/users/article')
    .get((req,res,next) => {
        UserArticle.find()
            .populate('photo')
            .populate('commented')
            .populate('liked')
            .populate('echart')
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
                        msg: '当前用户没有文章',
                        result: ''
                    })
                }
            })
    })


module.exports = UserArticle