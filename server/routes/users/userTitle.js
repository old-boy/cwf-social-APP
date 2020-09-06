var express = require('express')
var userTitleRouter = express.Router()

var UserTitle = require('../../models/user/userTitle')

userTitleRouter.route('/title')
    .get((req,res,next) => {
        UserTitle.find()
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
                        msg: '用户title不存在',
                        result: ''
                    })
                }
        })
    })

userTitleRouter.route('/title/add')
    .post((req,res,next) => {
        UserTitle.findOne({titleName: req.body.titleName}).then((doc) => {
            if(doc){
                res.status(400).json({ message: `${doc} 巳存在` }).send(doc)
            }else{
                var titleName = req.body.titleName;
                var titleIcon = req.body.titleIcon;

                var newUserTitle = new UserTitle({
                    titleName,
                    titleIcon
                });

                newUserTitle.save().then((title) => res.json({ message: `${title} 新增成功` })).catch(err=>{console.log(err)})
            }
        })
    })

userTitleRouter.route('/title/:id')
.delete((req, res) => {
    var _id = `${req.params.id}`;
    UserTitle.findById({ _id }).then((doc) => {
        if (!doc) {
            res.status(400).json({ message: `${doc} 不存在` })
        } else {
            UserTitle.deleteOne({ _id }).then(faq => res.status(200).json({ message: "删除成功" })).catch(err => { console.log(err) })
        }
    })
})

module.exports = UserTitle