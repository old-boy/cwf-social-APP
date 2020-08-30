var express = require('express')
var fs = require('fs')
var path = require('path')
var crypto = require('crypto')
var { handleError } = require('../../public/handleError.js')

const User = require('../../models/user/user')
var userRouter = express.Router();

//module.route 链式写法
userRouter.route('/')
    .get((req,res,next) => {
        User.find({})
            .sort({'_id':-1})
            .populate('tags')
            .populate('titles')
            .populate('info')
            .populate('charm')
            .populate('follows')
            .populate('texts')
            .populate('videos')
            .populate('photo')
            .limit(10)
            .exec()
            .then(data => {
                if (data) {
                    res.json({
                        status: '1',
                        msg: '',
                        result: data
                    })
                } else {
                    res.json({
                        status: '0',
                        msg: '没有用户',
                        result: ''
                    })
                }
            })
            .catch(err => console.log(err))
    })

userRouter.route('/add')
    .post((req,res) => {
        User.findOne({userName: req.body.userName}).then((users) => {
            if(users){
                res.status(400).json({ message: "用户巳存在" }).send(users)
            }else{
                var userName = req.body.userName,
                    password = req.body.password,
                    avatar = req.body.avatar,
                    introduction = req.body.introduction,
                    userFans = req.body.userFansId,
                    follow = req.body.followId,
                    role = req.body.role,
                    tags = req.body.tagsId,
                    titles = req.body.titleId,
                    info = req.body.infoId,
                    charm = req.body.charmId,
                    follows = req.body.followId,
                    texts = req.body.textId,
                    videos = req.body.videoId,
                    photo = req.body.photoId;

                const newUser = new User({
                    userName,
                    password,
                    avatar,
                    introduction,
                    userFans,
                    follow,
                    role,
                    tags,
                    titles,
                    info,
                    charm,
                    follows,
                    texts,
                    videos,
                    photo
                })

                newUser.save().then(user => res.json(user)).catch(err => console.log(err));
            }
        })
    })

//update    
userRouter.route('/:id')
    .post((req, res) => {
        var _id = `${req.params.id}`;
        User.findByIdAndUpdate({ _id }, req.body, (err, faq) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.status(200).json({ message: "更新成功" })
            }
        })
    })
    .delete((req, res) => {
        var _id = `${req.params.id}`;
        User.findById({ _id }).then((user) => {
            if (!user) {
                res.status(400).json({ message: "faq 不存在" })
            } else {
                User.deleteOne({ _id }).then(faq => res.status(200).json({ message: "删除成功" })).catch(err => { console.log(err) })
            }
        })
    })

//login
userRouter.route('/login')
    .post((req,res,next) => {
        var userName = req.body.userName,
            password = req.body.password;
        User.findOne({'userName': userName})
        .exec()
		.then((user) => {
			if (user) {
				user.comparePwd(password, (err, isMatch) => {
					if (err) throw err
					if (isMatch == true) {
						req.session.user = user
						res.json({
							status: '1',
							msg: '',
							result: {
								'user': user,
								'sessionId': req.session.id
							}
						})
					} else {
						res.json({
							status: '0',
							msg: 'password incorrect',
							result: ''
						})
					}
				})
			} else {
				res.json({
					status: '0',
					msg: '用户不存在',
					result: ''
				})
			}
		})
    })

//loginout
userRouter.route('/logout')
    .get((req,res,next) => {
        delete req.session.user
        res.json({
            status: '1',
            msg: '用户已退出',
            result: ''
        })
    })
    
module.exports = userRouter;