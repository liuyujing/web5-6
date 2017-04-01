/**
 * Created by liuyujing on 2017/3/30.
 */

angular.module("app",["ui.router"])

.config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

    $locationProvider.hashPrefix("");
    $stateProvider.state("tabs",{
        url:"/tabs",
        // abstract:true,
        templateUrl:"templates/tabs.html"
    });

    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{
            "tabs-home":{
                templateUrl:"templates/home.html"
            }
        }
    });

    $urlRouterProvider.otherwise("/tabs/home");
});

