/**
 * Created by liuyujing on 2017/3/22.
 */
(function () {

    var app = angular.module("app",["ui.router","app.directive"]);



    app.controller("homeController",function ($scope) {
        $scope.name = "123";
        $scope.show = function () {
            alert("333");
        }
    });
    app.config(function ($stateProvider,$urlRouterProvider) {

        $stateProvider.state("home",{
            url:"/home",
            templateUrl:"views/homeView.html",
            controller:"homeController"
        });
        $stateProvider.state("home.detaile",{
            views:{
                "home":{
                    url:"/homeDetile",
                    templateUrl:"views/homeDetileView.html"
                }
            }
        });
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