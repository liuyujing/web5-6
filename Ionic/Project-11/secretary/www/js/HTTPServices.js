/**
 * Created by liuyujing on 2017/4/7.
 */

angular.module("starter.HTTPServices",[])

.service("HTTPManager",function ($http,$httpParamSerializerJQLike) {



  this.post = function (url,param) {

    return $http({
      url:url,
      method:"POST",
      headers:{
        "content-type":"application/x-www-form-urlencoded"
      },
      data:$httpParamSerializerJQLike(param)

    });

  };

  this.get = function (url,param) {

    var paramStrings = [];

    for (key in param) {
      paramStrings.push(key+"="+param[key]);
    }

    return $http.get(url+"?"+paramStrings.join("&"));

  };

  //创建socket连接
  this.socketConnection = function () {

    return new Promise(function (res,rej) {
      var socket = io(HOST);
      socket.on("connect",function () {
        console.log(this);
        res(this);
      });
      socket.on("disconnect",function () {
        rej("socket连接已断开");
      });
    });
  };

  //发送内容
  this.send = function (eventName,message) {
    console.log("send");
    return new Promise(function (res,rej) {
      this.socketConnection().then(function (socket) {

        socket.emit(eventName,message,function () {
          res("发送成功");
        });

      }).catch(function (error) {
        rej(error);
      });
    }.bind(this));
  };

  //监听 发送的消息
  this.listen = function (eventName) {

    return new Promise(function (res,rej) {

      this.socketConnection().then(function (socket) {

        socket.on(eventName,function (message) {
          res(message);
        });

      }).catch(function (error) {
        rej(error);
      });

    }.bind(this));

  };

});

