var mongoose = require('mongoose')
var userBaseInfoSchema = require('../../schemas/user/baseInfo')

var BaseInfo = mongoose.model('BaseInfo',userBaseInfoSchema)
module.exports = BaseInfo