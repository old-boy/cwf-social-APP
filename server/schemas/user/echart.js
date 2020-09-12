const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const echartSchema = new Schema({
    echartName: {
        type:String,
        unique:true
    },
    data:[
        {sales:Number},  //销售
        {administrative:Number},  //行政
        {technology:Number},  //技术
        {customerSupport:Number},  //客户支持
        {marketing:Number} //市场营销
    ],
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
    echartSchema
}