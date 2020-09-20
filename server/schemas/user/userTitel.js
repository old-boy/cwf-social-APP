const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userTitleSchema = new Schema({
    titleName:String,
    uid:Number,
    type:String,
    size:Number,
    fileName:String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userTitleSchema