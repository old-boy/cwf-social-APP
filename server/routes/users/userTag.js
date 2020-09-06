var express = require('express')
var userTagRouter = express.Router()

var UserTag = require('../../models/user/userTag')

userTagRouter.route('/tag')
    .get((req, res) => {
        UserTag.find()
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
                        msg: '用户tag不存在',
                        result: ''
                    })
                }
        })
    })

userTagRouter.route('/tag/add')
    .post((req, res) => {
        UserTag.findOne({tagName:req.body.tagName}).then((doc) => {
            if(doc){
                res.status(400).json({ message: "faq 巳存在" }).send(doc)
            }else{
                var tagName = req.body.tagName;

                var newTag = new UserTag({
                    tagName
                });

                newTag.save().then(tag => res.json(tag)).catch(err => console.log(err));
            }
        })  
    })

    userTagRouter.route('/tag/:id')
    .post((req, res) => {
        var _id = `${req.params.id}`;
        UserTag.findByIdAndUpdate({ _id }, req.body, (err, faq) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.status(200).json({ message: "更新成功" })
            }
        })
    })
    .delete((req, res) => {
        var _id = `${req.params.id}`;
        UserTag.findById({ _id }).then((doc) => {
            if (!doc) {
                res.status(400).json({ message: `${doc} 不存在` })
            } else {
                UserTag.deleteOne({ _id }).then(faq => res.status(200).json({ message: "删除成功" })).catch(err => { console.log(err) })
            }
        })
    })

module.exports = userTagRouter


