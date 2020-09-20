const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const uploadSchema = new Schema({
    filename:String,
    size: Number,
    type:String,
    uid: Number,
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
    uploadSchema
}