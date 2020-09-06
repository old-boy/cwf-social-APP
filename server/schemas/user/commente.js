const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const commentSchema = new Schema({
    user:{
        type:ObjectId,    //用户 id
        ref: 'user'
    },
    commentNum: Number,   //评论数量
    commentText:String,   //评论内容
    likedNum:{
        type: ObjectId,
        ref:'Liked'       //被点赞数量
    },
    commentDate: {
        type: Date,
        default: Date.now() //评论日期与时间
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


module.exports = commentSchema