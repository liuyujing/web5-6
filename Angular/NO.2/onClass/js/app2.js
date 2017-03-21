/**
 * Created by liuyujing on 2017/3/21.
 */
(function () {

    var app = angular.module("app",["ui.router"]);
    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home",{
            //路径
            url:"/home",
                templateUrl:"views/home.html"


        })
            .state("circle",{
                url:"/circle",

                        templateUrl:"views/circle.html"

            })
            .state("message",{
                url:"/message",

                        templateUrl:"views/message.html"

            })
            .state("user",{
                url:"/user",
                views: {
                    'user': {
                        templateUrl:"views/user.html"
                    }
                }
            })
            .state("user.info",{
                url:"/userInfo",
                views: {
                    'user': {
                        templateUrl:"views/userInfo.html"
                    }
                }
            });

        //通过otherwise来定义 所有状态 都不符合的情况
        $urlRouterProvider.otherwise("/home");

    });

})();