var mongoose = require('mongoose')
var userTitleSchema = require('../../schemas/user/userTitel')

var UserTitle = mongoose.model('UserTitle',userTitleSchema)
module.exports = UserTitle