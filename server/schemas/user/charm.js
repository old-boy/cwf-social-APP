const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userCharmSchema = new Schema({
    reward:{
        fanRanking: {
            type: ObjectId,
            ref:'Fans'        //粉丝数量，排名
        },
        liked:{
            type: ObjectId,
            ref:'Liked'       //被点赞
        },
        downloaded:{
            type: ObjectId,
            ref: 'Downloade' //被下载
        },
        browsed:{
            type: ObjectId,
            ref: 'Browse'    //被浏览
        },
        commented:{
            type: ObjectId,
            ref:'Commente'   //被评论
        },
        
        rewarded:{
            type: ObjectId,
            ref:'Rewarde'    //被打赏数量
        },
        reposted:{
            type: ObjectId,
            ref:'Repost'     //被转发
        },
        cashIncome:{
            type: ObjectId,
            ref:'Cash'       //现金收入
        }
    },
    mutual:{
        articleNum: {
            type: ObjectId,
            ref: 'Article'     //文章数量
        },
        follows:{
            type: ObjectId,
            ref: 'Follow'       //关注数量
        },
        comment:{
            type: ObjectId,
            ref:'Commente'      //评论数量
        },
        rewarded:{
            type: ObjectId,
            ref:'Rewarde'        //被打赏数量
        },
        repost:{
            type: ObjectId,
            ref:'Repost'          //转发数量
        },
        send:{
            type: ObjectId,
            ref: 'SendMessage'   //发送量
        },
        fansIncome:{
            type: ObjectId,
            ref:'Fans'            //积分收入
        }
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

module.exports = userCharmSchema