var express = require('express')
const { fstat } = require('fs')
var path = require('path')
var fs = require('fs')
var uploadRouter = express.Router()

var uploadFile = require('../../models/upload/upload')

uploadRouter.route('/upload')
    .post((req,res,next) => {
        var _id = `${req.params.id}`;
        uploadFile.findById({_id}).then((doc) => {
            if(!doc){
                res.status(400).json({ message: `${doc} 不存在` })
            }else{
                var file = req.body.file
                var filename = file.filename
                var size = file.size
                var type = file.type
                var uid = file.uid
                var fileConfig = file.fileConfig

                var newFile = new uploadFile({
                    filename,
                    size,
                    type,
                    uid,
                    fileConfig
                })

                fs.writeFile('/admin/static/images/',newFile)
                newFile.save().then((doc) => res.json({ message: `${doc} 新增成功` })).catch(err=>{console.log(err)})
            }
        });
    })

module.exports = uploadRouter