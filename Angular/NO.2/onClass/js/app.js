/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {

    //2.需要在创建模块的时候 注入ngRoute
    var app = angular.module("app",["ngRoute"]);

    app.controller("homeController",function ($scope) {

    });
    app.controller("findController",function ($scope) {

    });
    app.controller("settingController",function ($scope) {

    });


    //3.设置模块的配置信息 配置路由
    app.config(function ($routeProvider,$locationProvider) {


        //任何条件 都不满足 otherwise
        $routeProvider.otherwise({redirectTo:"/home"});
        //路由中的每一种条件
        $routeProvider.when("/home",{
            template:"<div><h1>home</h1><p>homehomehome</p></div>",
            controller:"homeController"
        });
        $routeProvider.when("/find",{
            template:"<div><h1>find</h1><p>findfindfindfindfind</p></div>",
            controller:"findController"
        });
        $routeProvider.when("/setting",{
            template:"<div><h1>setting</h1><p>settingsettingsettingsetting</p></div>",
            controller:"settingController"
        });
        $locationProvider.hashPrefix("");
    });

})();
