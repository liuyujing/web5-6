/**
 * Created by liuyujing on 2017/3/23.
 */
(function () {

    angular.module("app",[])

        .controller("homeController",function ($scope) {
            $scope.name = "小明";
            $scope.showInfo = function () {
                alert("1111");
            }
        })
        .directive("ucai",function () {

            return {
                //元素 E
                //属性 A
                //类   C
                //注释 M
                restrict:"E",
                template:"<div><h1>优才创智</h1><p>很好 很不错</p></div>"
            }

        })
        .directive("web",function () {
            return {
               restrict:"EA",
                scope:{
                    //@ 指定属性的值是一个变量
                    content:"@"
                },
                template:"<div ng-bind='content'></div>"
            }
        })
        .directive("vv",function () {
            return {
                scope:{
                    content:"@",
                    active:"&"
                },
                template:"<button ng-click='active()' ng-bind='content'></button>"
            }
        });

})();