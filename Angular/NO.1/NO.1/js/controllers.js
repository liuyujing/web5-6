/**
 * Created by liuyujing on 2017/3/20.
 */

//在定义其他模块名的时候
//应用程序入口的模块名.其他模块名
var app = angular.module("app.controllers",[]);
    /*
    * 在调用 控制器函数的时候 需要传两个参数 
    * 控制器的名字 
    * 回调函数 -> 会得到  angular中的服务
    * */

    /*
    * 只要是 $开头的  都是 angular中的内置服务
    * 在自定angular的服务的时候 不要以$开始了
    * */

    /*
    * $scope
    * 用于连接 视图 和 模型的变量
    * 只要是定义在 $scope 上面的 变量  都已被 视图 找到
    * $scope 只在当前的控制器中起作用（表示控制器的作用域）
    * */

//     function Controller(app) {
//         app.controller("",function ($scope) {
//
//         })
//     }
//
//     function NewC() {
//
//     }
//
//     NewC.prototype = new Controller();
//
// var con = new NewC();
// app.controller = con;

    
app.controller("homeController",function ($scope) {
        $scope.person = {
            name:"小明"
        };

        $scope.toRequestAction = function () {
            var request = new XMLHttpRequest();
            request.open("GET","package.json");
            request.onload = function () {
                console.log(request.response);

                $scope.data = JSON.parse(request.response);
                //通过  $apply 去传递 数据模型里面的值
                $scope.$apply(function () {
                    $scope.data = JSON.parse(request.response);
                });
            };
            request.send();
        };

        $scope.age = 0;

        $scope.$watch("age",function (newValue,oldValue) {
            console.log(newValue,oldValue);
        });

    });

app.controller("findController",function ($scope,ajax,action) {
    ajax.get("",function () {

    });

    $scope.name = "小明";

    $scope.show = action.showInfo;
});

// window.$ = window.$||{};
// $.tt = {};

// $
// $scope

// function $() {
//
// }
//
// $();


