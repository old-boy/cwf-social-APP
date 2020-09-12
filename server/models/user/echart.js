var mongoose = require('mongoose')
var userEchartSchema = require('../../schemas/user/echart')

var UserEchart = mongoose.model('UserEchart',userEchartSchema)
module.exports = UserEchart