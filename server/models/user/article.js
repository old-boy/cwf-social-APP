var mongoose = require('mongoose')
var userArticleSchema = require('../../schemas/user/article')

var UserArticle = mongoose.model('UserArticle',userArticleSchema)
module.exports = UserArticle