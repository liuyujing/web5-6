
//node.js 引入模块  通过 require引入 -> 相当于引入js文件


var express = require('express');
var router = express.Router();

var DBManagerTools = require("../tools/DBManagerTool");

//阿里大于 短信验证的插件
//引入 阿里大于的插件
//require 是node.js中 引入模块的方法
var Alidayu = require("alidayu-node");

//创建 阿里大于的对象 详情请看：https://www.npmjs.com/package/alidayu-node
var sms = new Alidayu("23740919","d3c6942a0284362871d11c7c1b8da95c");

// Router
//
// users
// /verifyCode
// /register


//验证码
// var verifyCode = 0;

//短信验证接口
router.get("/verifyCode",function (req,res) {

  //随机生成六位数字类型的验证码
  var verifyCode = parseInt(Math.random()%1000000*1000000);

  console.log(verifyCode);

  //req request的对象  -> 客户端发送过来的内容对象
  // 如果是get 参数在query对象
  // 如果是post 参数在body对象

  // res response 是服务端 回应给客户端的对象
  // res send() -> 发送内容到 客户端
  if (req.query.phone){

    //配置 短信验证的内容
    //详情请看：https://www.npmjs.com/package/alidayu-node
    var info = {
        sms_free_sign_name:'我的小秘书',
        sms_param:{
          code:verifyCode+"",
          product:"秘书"},
        rec_num:req.query.phone,
        sms_template_code:'SMS_60420032'
    };

    //发送验证码 到手机
    sms.smsSend(info,function (result) {
      //发送的回调结果
      console.log(result);

      //发送验证码成功
      if(result.alibaba_aliqin_fc_sms_num_send_response.result.success){
        
      res.send({
        code:2000,
        message:"验证码发送成功",
        verifyCode:verifyCode
      });

      }else {
        verifyCode = 0;
      //  发送验证码失败
        res.send({
          code:3004,
          message:"发送验证码失败"
        });
      }

    })

  }else {
    res.send({
      code:3002,
      message:"请传入手机号或者检查参数的key是否正确"
    });
  }
});

//注册的接口
router.post("/register",function (req,res) {

  if (verifyCode){

    if (verifyCode != req.body.verifyCode){

      res.send({
        code:3006,
        message:"验证码有误"
      });

      return;
    }

  }else {
  //  提示用户未填写验证码

    res.send({
      code:3005,
      message:"未填写验证码"
    });

    return;
  }

  // 判断是否传入了 用户名和手机
  if (req.body.username&&req.body.phone){

    //如果传入了 执行sql 语句 添加一个用户到 数据库
    DBManagerTools.addUser(req.body).then(function (result) {
      //todo: 需要返回用户信息
      console.log(result);
      res.send({
        code:2000,
        message:"注册成功"
      });
    }).catch(function (error) {
      console.log(error);
      res.send({
        code:3000,
        message:"数据库操作失败"
      });
    });

  }else {

    res.send({
      code:3003,
      message:"未填写用户名或手机号"
    });
  }

});


module.exports = router;

/*
* 1.把课上内容  搞通透
* 2.可以自己实现 注册用户的功能
* 3.写获取用户信息的接口 -> 根据手机或用户名
* */