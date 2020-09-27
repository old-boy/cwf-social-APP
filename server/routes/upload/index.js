var express = require('express')
var path = require('path')
var fs = require('fs')

var uploadRouter = express.Router()
var Upload = require('../../models/upload/index')
var uploadConfig = require('../../models/upload/config')



uploadRouter.route('/add',uploadConfig.single('file'))
    .post((req, res) => {
        console.log('files  ' + JSON.stringify(uploadConfig.single('file')))
        Upload.findOne({name:req.body.name}).then((doc) => {
            if(!doc){
                res.status(400).json({ message: `${doc} 不存在` })
            }else{
                var file = req.file;
                var fileObj = {
                    name: file.filename,
                    type: file.mimetype.split("/")[1],
                    url: '/upload/files/' + file.filename,
                    size: (file.size / (1024 * 1024)).toFixed(2) + "Mb",
                    createAt: Date.now()
                }
                
                var newFile = new Upload(fileObj)

                console.log('upload files   ' + newFile);
                newFile.save().then((doc) => res.json({ message: `${doc} 文件上传成功` })).catch(err=>{ res.redirect("/");})
            }
        })  
    })




module.exports = uploadRouter