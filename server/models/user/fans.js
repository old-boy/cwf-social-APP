var mongoose = require('mongoose')
var userFansSchema = require('../../schemas/user/fans')

var UserFans = mongoose.model('UserFans',userFansSchema)
module.exports = UserFans