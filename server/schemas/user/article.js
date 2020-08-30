const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userArticleSchema = new Schema({
    title:String,
    subTitle:String,
    text:String,
    photo:{
        type: ObjectId,
        ref: 'PhotoBooklet' //用户相册
    },
    commented:{
        type: ObjectId,
        ref:'Commente'   //被评论
    },
    liked:{
        type: ObjectId,
        ref:'Liked'       //被点赞
    },
    echart:{
        type: ObjectId,
        ref:'Echart'       //图标分析
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userArticleSchema