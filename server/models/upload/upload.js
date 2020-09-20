var mongoose = require('mongoose')
var uploadSchema = require('../../schemas/upload/upload')

var uploadFile = mongoose.model('uploadFile',uploadSchema)
module.exports = uploadFile