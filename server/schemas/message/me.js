// 我的消息

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const meMessageSchema = new Schema({
    messageName: String,
    iconName: String,
    messageNumber: Number,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

exports.default = {
    meMessageSchema
}