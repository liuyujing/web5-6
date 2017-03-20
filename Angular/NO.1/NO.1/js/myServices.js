/**
 * Created by liuyujing on 2017/3/20.
 */


//通过servicce这个函数 定义服务
/*
* 第一个参数 是服务的名字 -> 字符串类型
* 第二个参数 是服务中的内容 -> 函数
* */
angular.module("app.services",[])
    .service("ajax",function () {

        this.get = function (url,callback) {

            var request = new XMLHttpRequest();
            request.open("GET",url);
            request.onload = function () {
                callback(request.response);
            };
            request.send();
            // console.log("调用了");
        };
        this.myGet = function (url) {
            var promise = new Promise(function (res,reject) {

                var request = new XMLHttpRequest();
                request.open("GET",url);
                request.onload = function () {
                    if (request.response){
                        res(request.response);
                    }else {
                        reject({
                            code:300,
                            message:"没有回应数据"
                        }); 
                    }

                };
                request.send();

            });
            return promise;
        }

    })
    .service("action",function () {
        this.showInfo = function (info) {
            alert(info);
        }
    });
