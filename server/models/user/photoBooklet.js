var mongoose = require('mongoose')
var userPhotoSchema = require('../../schemas/user/photoBooklet')

var UserPhotoBooklet = mongoose.model('UserPhotoBooklet',userPhotoSchema)
module.exports = UserPhotoBooklet