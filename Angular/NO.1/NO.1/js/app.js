/**
 * Created by liuyujing on 2017/3/20.
 */

// window.ucai = {};
// var a = "";
// function Person() {
//
//     this.move = function () {
//
//     };
// }
//
// new Person();
//
// p.move();
//
// // var list = [];
// list.forEach();

//初始化  是创建一个  真真正正 存在的对象

/*
 ✭✭✭✭✭
 在javaScript 虽然是 不初始化 也可以使用
 但是 是一个undefind的类型
 但是如果希望是指定类型 就需要 初始化了
 */




(function () {


    /*
    * 第一个参数:模块的名字
    * [] 用于注入模块的数组 -> 字符串（模块的名字）
    * ng-app = "app" 这个的名字（app） 需要与应用程序入口模块的名字相同
    * */

    /*
    * javascript:
    * 在浏览器中解释 js的时候 初始化的类型 就会认为是什么类型
    * 当浏览器发现 数据类型 不一样的时候 就会认为 是自己错了  会重新定义这个变量的类型
    * 所以不要 去修改 变量的数据类型 效率非常低
    *
    * */

    // function Person() {
    //     this.controller = function () {
    //
    //     }
    // }
    // new Person().controller();
    // var app = new Person();
    // app.controller();

    // angular.module("app",[])
    //     .controller("",function () {
    //
    //     });
    //
    // var app = angular.module("app",[]);
    // app.controller("",function () {
    //
    // });

    //应用程序的入口模块
    //ng-app 指定了 入口模块
    //在入口模块里面 不需要写 大量的代码
    //一般 在这个里面 写 配置 入口模块相关的代码
    angular.module("app",["app.controllers","app.services"]);


})();