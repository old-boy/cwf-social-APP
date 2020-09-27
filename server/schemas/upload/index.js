const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const uploadSchema = new Schema({
    name: String,
    url: String,
    type: String,
    size: String,
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