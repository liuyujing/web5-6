/**
 * Created by liuyujing on 2017/3/20.
 */
(function () {

    //创建控制器的模块
    var app = angular.module("app.controllers",[]);
    //创建控制器
    app.controller("homeController",function ($scope,saveLocation) {

        //初始化账目的对象
        //规定格式 ：title price
        $scope.book = {};

        //初始化  账目的数组
        $scope.books = [];

        //保存账目信息的事件
        $scope.toSave = function (info) {
            console.log(info);

            this.books.push(info);
            saveLocation.save("books",this.books);
        }

    });
    

})();