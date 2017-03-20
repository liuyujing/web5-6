/**
 * Created by liuyujing on 2017/3/20.
 */
(function () {

    //创建控制器的模块
    var app = angular.module("app.controllers",[]);
    //创建控制器
    app.controller("homeController",function ($scope,saveLocation) {

        //初始化账目的对象
        //规定格式 ：title price
        $scope.book = {};

        //初始化  账目的数组
        //重启浏览器的时候  可以显示 之前保存的数据
        $scope.books = saveLocation.read("books")||[];

        //保存账目信息的事件
        $scope.toSave = function (info) {
            console.log(info);
            //现在 保存的 都是 同一个 book对象
            //只要更改book中的值 就会同步更改（因为指向的同一块内存地址<同一个对象>）
            //解决这个bug -> 每次都重新创建一个对象

            //每次添加数据  都会实例化一个新的Book对象
            // var book = new Book(info.title,info.price);

            this.books.push(new Book(info.title,info.price));

            saveLocation.save("books",this.books);
        }

    });
    

})();