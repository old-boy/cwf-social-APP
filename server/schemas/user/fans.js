const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const fansSchema = new Schema({
    fans:[
        {
            user:{
                type:ObjectId,    //用户 id
                ref: 'user'
            }
        }
    ],
    fansNum: Number,
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
    fansSchema
}