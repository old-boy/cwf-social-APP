var mongoose = require('mongoose')
var userTagSchema = require('../../schemas/user/userTag')

var UserTag = mongoose.model('UserTag',userTagSchema)
module.exports = UserTag