const express = require('express')
const echartRouter = express.Router()
const UserEchart = require('../../models/user/echart')

echartRouter.route('/users/echart')
    .get((req,res,next) => {
        UserEchart.find()
                  .exec()
                  .then((doc) => {
                    if (doc) {
                        res.json({
                            status: '1',
                            msg: '',
                            result: doc
                        })
                    } else {
                        res.json({
                            status: '0',
                            msg: '没有数据',
                            result: ''
                        })
                    }
                  })
    })

    .post((req,res,next) => {
        UserEchart.findOne({echartName:req.body.echartName})
            .then((doc) => {
                if(!doc){
                    res.status(400).json({ message: `${doc} 不存在` })
                }else{
                    let echartName = req.body.echartName;
                    let data = [];

                    let sales = req.body.sales;
                    let administrative = req.body.administrative;
                    let technology = req.body.technology;
                    let customerSupport = req.body.customerSupport;
                    let marketing = req.body.marketing;

                    let dataEntity = {
                        sales,
                        administrative,
                        technology,
                        customerSupport,
                        marketing
                    }

                    data.push(dataEntity);

                    let newEchart = new UserEchart({
                        echartName,
                        data
                    })

                    newEchart.save().then((doc) => res.json({ message: `${doc} 新增成功` })).catch(err=>{console.log(err)})
                }
            })
    })

echartRouter.route('/users/echart/:id')
    .delete((req,res,next) => {
        var _id = `${req.params.id}`;
        UserEchart.findById({ _id }).then((doc) => {
            if (!doc) {
                res.status(400).json({ message: `${doc} 不存在` })
            } else {
                UserEchart.deleteOne({ _id }).then(faq => res.status(200).json({ message: "删除成功" })).catch(err => { console.log(err) })
            }
        })
    })

module.exports = echartRouter