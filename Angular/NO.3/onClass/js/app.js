/**
 * Created by liuyujing on 2017/3/23.
 */
(function () {

    var app = angular.module("app",["ui.router"]);

    app.config(function ($stateProvider,$urlRouterProvider) {

        //分发的每一条路由
        /*
        * state(参数1, 参数2)
        * 参数1: 路由状态的名字 -> 切换路由的时候 就是根据这个名字去切换的
        * 参数2: 具体路由的配置
        * */
        $stateProvider.state("home",{
            url:"/home",
            templateUrl:"views/homeView.html"
            // ,controller:""
        });
        $stateProvider.state("find",{
            url:"/find",
            templateUrl:"views/findView.html"
        });
        $stateProvider.state("setting",{
            url:"/setting",
            templateUrl:"views/settingView.html"
        });

        //当不符合 所有路由状态的时候 去重新指定的 路由状态(路径)
        $urlRouterProvider.otherwise("/home");
    });


})();