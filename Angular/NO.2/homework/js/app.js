/**
 * Created by liuyujing on 2017/3/21.
 */
(function () {

    //创建应用程序的入口
    /*
    * app:模块的名字
    * ["app.services"] 注入模块的数组 -> 存放的是模块的名字
    * */
    angular.module("app",["app.services","app.controllers"]);


})();