var mongoose = require('mongoose')
var userLikedSchema = require('../../schemas/user/liked')

var UserLike = mongoose.model('UserLike',userLikedSchema)
module.exports = UserLike