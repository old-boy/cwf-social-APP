const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const photoBookletSchema = new Schema({
    user:{
        type:ObjectId,  //用户 id
        ref: 'user'
    },
    images:Array,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = photoBookletSchema