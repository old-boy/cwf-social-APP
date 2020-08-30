var mongoose = require('mongoose')
var userFollowSchema = require('../../schemas/user/follow')

var UserFollow = mongoose.model('UserFollow',userFollowSchema)
module.exports = UserFollow