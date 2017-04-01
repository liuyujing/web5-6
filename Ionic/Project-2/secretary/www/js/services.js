angular.module("starter.services",[])


.service("writeService",function () {

  //提醒时间
  function alertTime() {

    var date  =new Date();

    return date.getTime();
  }

//  紧急状态
//  0 1 2
  function status(s) {


    //s = 0  num: 1
    //s = 1  num:2
    //s = 2  num:0
    var num = s>=2 ? 0:++s;

    var info = {};

    switch (num){
      case 0:
        info.message = "紧急事件";
        break;
      case 1:
        info.message = "普通事件";
        break;
      case 2:
        info.message = "推迟事件";
        break;
      default:
    }

    info.statusNum = num;

    return info;
  }

//  获取用户位置
  function getCurLocation() {

    var promise = new Promise(function(res,reject){
      var geo = new BMap.Geolocation();

      geo.getCurrentPosition(function (result) {
        if (this.getStatus()==BMAP_STATUS_SUCCESS){

          //获得到定位的位置
          var point = result.point;

          var coder = new BMap.Geocoder();
          coder.getLocation(point,function (rs) {
            //获得到 地址的对象
            var addComp = rs.addressComponents;
            var address = addComp.province + " " + addComp.city + " " + addComp.district + " " + addComp.street + " " + addComp.streetNumber;

            //反地理编码成功之后  把坐标 和 位置信息 传递到 使用promise 的地方
            res({
              point:point,
              address:address
            });

          });

        }
      });
    });

    return promise;

  }

  this.alertTime = alertTime;
  this.status = status;
  this.getCurLocation = getCurLocation;
});




// ES6 Promise（承诺） 不是立刻提供 内容 什么时候 条件成熟  什么时候 再去 实现承诺  提供内容
// 创建Promise对象的时候  需要传一个函数
// 有两个参数  成功的响应（条件成熟执行的内容）->then(function(data){data就是承诺要给的东西}) 失败的响应 （未成功执行的）catch(function(error){error未成功的回应})


// var promise = new Promise(function (resolve,reject) {
//
//   if(success){
//     resolve("成功");
//   }else {
//     reject("失败");
//   }
//
// });
//
// promise.then(function (result) {
//   console.log(result);
// }).catch(function (error) {
//   console.log(error);
// });








