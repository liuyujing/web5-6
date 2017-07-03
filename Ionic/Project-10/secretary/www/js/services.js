angular.module("starter.services",[])

  .service("timeTool",function () {

      //时间戳 是一个 时间的标记
      //从1970年到 当前时间的一个 毫秒数

      //xxxx年-xx月-xx日
      this.yearMonthDay = function (timeStamp) {
        //把时间戳 -> 日期对象
        var date = new Date(timeStamp);

        var dateString = date.getFullYear()+"年-"+(date.getMonth()+1)+"月-"+date.getDate()+"日";

        console.log(dateString);
        return dateString;
      };



    //转成十位补零
    function returnDecimal(num) {
        return num>=10 ? num:"0"+num;
    }
//  xx:xx:xx
    this.hourMinuteSeconds = function (timeStamp) {

      var date = new Date(timeStamp);

      return returnDecimal(date.getHours())+":"+returnDecimal(date.getMinutes())+":"+returnDecimal(date.getSeconds());
    };

  //  上午 下午 12
    this.amOrPm = function (timeStamp) {
      var date = new Date(timeStamp);
      var hours = date.getHours();
      var ampm = hours>=12?"下午":"上午";
      hours = hours>12 ? hours-12:hours;
      return ampm+" "+hours+":"+date.getMinutes()+":"+date.getSeconds();
    };


  // 周几
      this.week = function (timeStamp) {
        var date = new Date(timeStamp);

        var weekNum = date.getDay();

        var list = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]

        return list[weekNum];
      }

  })

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
  })

  .service("DBManager",function () {

  var self = this;

  //打开数据库的方法
  this.openDB = function (dbName,dbVersion) {

    //打开数据库 得到数据库对象
    this.db = openDatabase(dbName,dbVersion,dbName,10*1024*1024);

  };

  //建表的方法
  this.createTable = function (sql) {

    return new Promise(function (res,reject) {

      if (self.db){

        self.db.transaction(function (ts) {
          //事物上下文对象  执行sql
          //sqlStatement,arguments,callback,errorCallback
          ts.executeSql(sql,[],function (trans,result) {
            //建表成功 回应的内容
            res({
              code:2000,
              message:"建表成功",
              data:result
            });
          },function (error) {
            //建表失败 拒绝的内容
            reject({
              code:2001,
              message:"建表失败",
              data:error
            });
          });
        });
      }else {
        reject({code:3000,message:"请开打数据库"});
      }

    });
  };

  /*
  * addData 插入数据 到数据库
  * sql:string sql语句
  * vaules:array 插入的值 数组
  * */
  this.addData = function (sql,vaules) {

    return new Promise(function (res,reject) {

      if (self.db){

        self.db.transaction(function (ts) {
            ts.executeSql(sql,vaules,function (trans,result) {

              res({
                code:2000,
                message:"添加数据成功",
                data:result
              });

            },function (error) {
                reject({
                  code:2002,
                  message:"添加数据失败",
                  data:error
                });
            });
        });

      }else {
        reject({code:3000,message:"请开打数据库"});
      }

    });
  };

  this.updateData = function (sql,vaules) {
    return new Promise(function (res,reject) {

      if (self.db){

        self.db.transaction(function (ts) {
          ts.executeSql(sql,vaules,function (trans,result) {

            console.log("uuuupate",vaules);
            res({
              code:2000,
              message:"更新数据成功",
              data:result
            });

          },function (error) {
            reject({
              code:2002,
              message:"更新数据失败",
              data:error
            });
          });
        });

      }else {
        reject({code:3000,message:"请开打数据库"});
      }

    });
  };

  this.deleteData = function (sql) {
    return new Promise(function (res,reject) {

      self.db.transaction(function (ts) {

        ts.executeSql(sql,[],function (trans,result) {

          res({
            code:2000,
            message:"删除成功",
            data:result
          });

        },function (error) {
          reject({
            code:2004,
            message:"删除数据失败",
            data:error
          });
        });

      })

    });
  };

  this.searchData = function (sql) {
    return new Promise(function (res,reject) {

      if (self.db){
        self.db.transaction(function (ts) {

          ts.executeSql(sql,[],function (trans,result) {

            res({
              code:2000,
              message:"查询成功",
              data:result.rows
            });

          },function (error) {
            reject({
              code:2003,
              message:"查询数据失败",
              data:error
            });
          });

        });
      }else {
        reject({code:3000,message:"请开打数据库"});
      }

    });
  };
})

  .service("alertView",function ($ionicLoading,$timeout) {

    this.showMessageForDelay = function (message,delay) {
      $ionicLoading.show({
        template:message
      });
      $timeout(function () {
        $ionicLoading.hide();
      },delay);
    };

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








