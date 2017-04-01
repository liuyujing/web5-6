/**
 * Created by liuyujing on 2017/3/23.
 */
(function () {

    var app = angular.module("app.directive",[]);
    app.directive("ttt",function () {
        return {
            restrict: 'AE',
            scope:{
                name:"@",
                active:"&"
            },
            template: "<button ng-click='active()'>{{name}}</button>"
        }
    });
})();