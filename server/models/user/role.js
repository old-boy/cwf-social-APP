var mongoose = require('mongoose')
var userRoleSchema = require('../../schemas/user/role')

var UserRole = mongoose.model('UserRole',userRoleSchema)
module.exports = UserRole