const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userLikedSchema = new Schema({
    user:{
        type:ObjectId,  //被收藏的人
        ref: 'user'
    },
    likedNum: Number,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userLikedSchema