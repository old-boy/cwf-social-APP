var express = require('express')
var fs = require('fs')
var path = require('path')
var crypto = require('crypto')
var { handleError } = require('./../public/handleError.js')

const User = require('./../models/user')
const userRouter = express.Router();

userRouter.router('/')
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

userRouter.router('/add')
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


