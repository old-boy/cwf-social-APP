var mongoose = require('mongoose')
var userCharmSchema = require('../../schemas/user/charm')

var UserCharm = mongoose.model('UserCharm',userCharmSchema)
module.exports = UserCharm