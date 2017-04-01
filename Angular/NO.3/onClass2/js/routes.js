/**
 * Created by liuyujing on 2017/3/23.
 */
(function () {

    var routesModule = angular.module("app.routes",[]);

    routesModule.config(function ($stateProvider,$urlRouterProvider) {

        $stateProvider.state("home",{
            url:"/home",
            templateUrl:"views/homeView.html"
        });

        //注意：✭✭✭✭✭某一个视图的下一级页面 使用.表示状态的层级关系
        $stateProvider.state("home.homeDetail",{
            views:{
                "home":{
                    url:"/homeDetail",
                    templateUrl:"views/homeDetailView.html"
                }
            }
        });
        // $stateProvider.state("home.homeVV",{
        //     views:{
        //         "home":{
        //             url:"/homeVV",
        //             templateUrl:"views/homeVVView.html"
        //         }
        //     }
        // });

        $stateProvider.state("find",{
            url:"/find",
            templateUrl:"views/findView.html"
        });
        $stateProvider.state("setting",{
            url:"/setting",
            templateUrl:"views/settingView.html"
        });

        $urlRouterProvider.otherwise("/home");

    });

})();