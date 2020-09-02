var express = require('express')
var fs = require('fs')
var path = require('path')
var crypto = require('crypto')

const User = require('../../models/user/user')
var router = express.Router();

//module.route 链式写法
router.get('/',(req,res,next) => {
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
    

router.post('/add',(req,res) => {
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
    

// 删除用户  signRequired, adminRole,
router.delete('/del/:id',  (req, res, next) => {
	const id = `${req.params.id}`;
	User.deleteOne({ _id: id }).then((user) => {
		// console.log(user)
		if(user){
			res.status(200).json({
				status: '1',
				msg: '删除用户成功',
				result: ''
			})
		}else{
			res.status(400).json({
				status: '0',
				msg: '用户不存在',
				result: ''
			})
		}
	})
})

// 修改用户权限  signRequired, adminRole,
router.post('/modify/role', (req, res, next) => {
	let role = req.body.role
	let id = req.body.id
	User.findOne({ _id: id }, (err, user) => {
		if (err) {
			res.json({
				status: '0',
				msg: err.message,
				result: ''
			})
		}
		if (user) {
			if (user.role >= 50) {
				res.json({
					status: '0',
					msg: '权限不够，不能修改',
					result: ''
				})
			} else {
				user.role = role
				user.save(err => {
					if (err) {
						res.json({
							status: '0',
							msg: err.message,
							result: ''
						})
					} else {
						res.json({
							status: '1',
							msg: '权限修改成功',
							result: ''
						})
					}
				})
			}
		} else {
			res.json({
				status: '0',
				msg: '用户不存在',
				result: ''
			})
		}
	})
})

// 最高权限修改密码 signRequired, adminRole,
router.post('/modify/psd', (req, res, next) => {
	let pwd = req.body.password
	let id = req.body.id
	User.findOne({ _id: id }, (err, user) => {
		if (user) {
			console.log(user)
			crypto.randomBytes(16, (err, buf) => {
				let salt = buf.toString('hex')
				user.pwdKey = salt
				crypto.pbkdf2(pwd, salt, 4096, 16, 'sha1', (err, secret) => {
					if (err) throw err
					user.password = secret.toString('hex')
					user.save(err => {
						if (err) {
							res.json({
								status: '0',
								msg: err.message,
								result: ''
							})
						} else {
							res.json({
								status: '1',
								msg: '修改密码成功',
								result: ''
							})
						}
					})
				})
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

// 登陆接口
router.post('/login', (req, res, next) => {
	var userName = req.body.userName,
		password = req.body.password;
    console.log('userParams   ' + req.body.userName)
	User.find({ 'userName':userName })
		.exec()
		.then((user) => {
			if (user) {
                res.json({
                    status: '1',
                    msg: '',
                    result: {
                        'user': user,
                        'sessionId': req.session.id
                    }
                })
				// user.comparePwd(password, (err, isMatch) => {
				// 	if (err) throw err
				// 	if (isMatch == true) {
				// 		req.session.user = user
				// 		res.json({
				// 			status: '1',
				// 			msg: '',
				// 			result: {
				// 				'user': user,
				// 				'sessionId': req.session.id
				// 			}
				// 		})
				// 	} else {
				// 		res.json({
				// 			status: '0',
				// 			msg: 'password incorrect',
				// 			result: ''
				// 		})
				// 	}
				// })
			} else {
				res.json({
					status: '0',
					msg: '用户不存在',
					result: ''
				})
			}
		})
})

// 登出接口
router.get('/logout', (req, res, next) => {
	delete req.session.user
	res.json({
		status: '1',
		msg: '用户已登出',
		result: ''
	})
})

module.exports = router;