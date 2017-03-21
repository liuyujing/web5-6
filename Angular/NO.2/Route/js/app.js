/**
 * Created by liuyujing on 2017/3/21.
 */
(function () {

    /*
        ngRoute是通过 路径来 指定路由的位置
     一: 可以通过 href 指定路由的位置
     二: 把每一个路由中的内容显示出来 ng-view
    */

    //1. 注入路由模块
    var app = angular.module("app",["ngRoute"]);

    app.controller("homeController",function () {

    });

    app.controller("findController",function ($scope) {
        $scope.title = "发现页面";
    });


    //2. 配置入口的应用程序 配置路由
    app.config(function ($routeProvider,$locationProvider) {

        //angular1.46 -> 1.63 版本的时候  跳转 路径的时候 hash只出现错误
        //$locationProvider 通过 hashPrefix 去把多余的部分清空掉
        $locationProvider.hashPrefix("");

        //3.配置路由的信息 每一个when是一个条件
        $routeProvider.when("/home",{
            // template:"<div>home</div>"

            //可以通过templateUrl 指定视图文件的路径
            templateUrl:"views/homeView.html",
            controller:"homeController"
        });
        $routeProvider.when("/find",{
            // template:"<div>find</div>"
            templateUrl:"views/findView.html",
            controller:"findController"
        });

        //4.配置 当所有条件 都不符合的时候 重新指向的位置
        $routeProvider.otherwise("/find");
    });
    
})();