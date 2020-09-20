var express = require('express')
const { fstat } = require('fs')
var path = require('path')
var fs = require('fs')
var uploadRouter = express.Router()

var Upload = require('../../models/upload/index')



    uploadRouter.route('/upload')
    .post((req, res) => {
        Upload.findOne({file:req.body.file}).then((doc) => {
            if(!doc){
                res.status(400).json({ message: `${doc} 不存在` })
            }else{
                var file = req.body.file

                var newFile = new Upload({
                    file
                })

                fs.writeFile('/admin/static/images/',newFile)
                newFile.save().then((doc) => res.json({ message: `${doc} 新增成功` })).catch(err=>{console.log(err)})
            }
        })  
    })

module.exports = uploadRouter