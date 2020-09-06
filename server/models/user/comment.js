var mongoose = require('mongoose')
var userCommentSchema = require('../../schemas/user/commente')

var UserComments = mongoose.model('UserComment',userCommentSchema)
module.exports = UserComments