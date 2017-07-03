/**
 * Created by liuyujing on 2017/4/11.
 */

var express = require('express');
var router = express.Router();

var DBManagerTools = require("../tools/DBManagerTool");

router.post("/addRecoder",function (req,res) {

    if (req.body) {
        DBManagerTools.addRecoder(req.body).then(function (result) {
            res.send({
                code:2000,
                message:"添加數據成功"
            });
        }).catch(function (error) {
            res.send({
                code:3000,
                message:"數據庫操作失敗"
            });
        });
    }

});

router.get("/deleteRecoder",function (req,res) {
    if (req.query.recoderID){

        DBManagerTools.deleteRecoder(req.query.recoderID).then(function (result) {
            if (result){
                res.send({
                    code:2000,
                    message:"数据已移入垃圾箱"
                });
            }
        }).catch(function () {
            res.send({
                code:3000,
                message:"数据库操作失败"
            });
        });
    }else {
        res.send({
            code:3009,
            message:"请传入要删除的信息ID"
        });
    }
});

router.post("/updateRecoder",function (req,res) {

});

router.get("/searchRecoder",function (req,res) {
    DBManagerTools.searchRecoder(req.query.user_id).then(function (result) {
        res.send({
            code:2000,
            message:"搜索成功",
            data:result
        });
    }).catch(function () {
        res.send({
            code:3000,
            message:"數據庫操作失敗"
        });
    });
});


module.exports = router;


/*
* 2-3人一组 设计app需求
* 最终 完成app
* */