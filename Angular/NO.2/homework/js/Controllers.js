/**
 * Created by liuyujing on 2017/3/21.
 */
(function () {

    /*
    * 创建控制器的模块
    * */
    var controllers = angular.module("app.controllers",[]);

    /*
    * 创建控制器
    * 控制器的名字
    * 回调函数
    * */
    controllers.controller("postNewsController",function ($scope,dataManager,$rootScope) {

        init($scope,dataManager,$rootScope);

    });

    //事件相关函数
    function events($scope,dataManager) {

        $scope.toPost = function (newsInfo) {
            console.log(newsInfo);

            //创建一条 News 类型的对象
            var newsObj = new News(newsInfo.image,newsInfo.title,newsInfo.des);

            //把创建好的新闻对象  存放到数组中
            this.newsList.push(newsObj);

            //保存 存放 新闻对象的  数组
            dataManager.save("newsList",this.newsList);

        }
    }

    //初始化函数
    function init($scope,dataManager,$rootScope) {

        $rootScope.message = "消息";
        //初始化新闻的对象  用于接收 发布的内容
        $scope.news = {};

        //初始化新闻列表的数组 用于展示新闻数据（从localstrage中读取出来的数据）
        $scope.newsList = dataManager.read("newsList")||[];

        $rootScope.newsArr = $scope.newsList;

        events($scope,dataManager);
    }

    controllers.controller("readNewsController",function ($scope,dataManager,$rootScope,$interval,$http) {

        // $http.get("package.json").then(function (data) {
        //     console.log(data);
        // });

        //初始化 新闻列表的数组
        // $scope.list = dataManager.read("newsList")||[];
        $scope.list = $rootScope.newsArr;

        $scope.num = 1;
        // setInterval(function () {
        //     $scope.num++;
        //
        // },1000);

        $interval(function () {
            $scope.num++;
        },3000);

        // $timeout(function () {
        //
        // },1000);

        //更新数据的事件
        $scope.update = function () {

            console.log($rootScope.message);

            this.list = dataManager.read("newsList")||[];
        }        
    });

})();