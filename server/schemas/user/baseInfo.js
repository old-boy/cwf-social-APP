const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userBaseInfoSchema = new Schema({
    gender:String,
    age:String,
    constellation:String,
    area:String,
    company:String,
    feelingStatus:String,
    registrationDate: Date,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userBaseInfoSchema