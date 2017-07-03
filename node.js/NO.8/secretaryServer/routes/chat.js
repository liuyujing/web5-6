/**
 * Created by liuyujing on 2017/4/14.
 */

// var express = require('express');
// var router = express.Router();
//
// //发送
// /*
// * from
// * to
// * message
// * */
//
// var message = "";
// router.post("/sendMessage",function (req,res) {
//
//     message = req.body.message;
//     //在 from 和 to 对应的 chat 这个表中
//     //添加一条记录 -> 生成一条  聊天信息的ID
//     res.send({
//         message:"插入成功"
//     });
//
// });
//
// // 接收
// router.post("/receiveMessage",function (req,res) {
//
// //    聊天信息的ID -> 查询数据库
//     res.send({
//         message:message
//     });
//
// });
//
// module.exports = router;

//webScoket -> 监听事件
// addFriend


/*
* 封装 scoket.io的类
* server 通过Node.js创建的HTTP服务
* */

function Chat(server) {

//创建scoket对象 需要传入HTTP服务对象
    var io = require("socket.io");
    var socket = io(server);

//监听socket的连接状态
    socket.on("connection",function (result) {
    //result是连接好的 socket对象

        console.log("已连接上");

        result.on("addFriendInvite",function (e) {
            console.log(e);
        });
        
    });

    socket.on("disconnect",function () {
        console.log("连接已断开");
    })
}

module.exports = Chat;