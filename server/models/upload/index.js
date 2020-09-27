var mongoose = require('mongoose')
var uploadSchema = require('../../schemas/upload/index')
var Upload = mongoose.model('Upload',uploadSchema)

module.exports = Upload