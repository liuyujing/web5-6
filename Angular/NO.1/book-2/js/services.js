/**
 * Created by liuyujing on 2017/3/20.
 */
(function () {

    //创建服务的模块
    var app = angular.module("app.services",[]);

    //自定义服务
    app.service("saveLocation",function () {

        // localStorage.setItem("aaa",55);
        // localStorage.getItem("aaa");

        //保存
        this.save = function (key,value) {
            localStorage.setItem(key,value?JSON.stringify(value):null);
        };
        //读取
        this.read = function (key) {
            var result = localStorage.getItem(key);
            return result?JSON.parse(result):null;
        };
    });

    
})();