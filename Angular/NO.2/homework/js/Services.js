/**
 * Created by liuyujing on 2017/3/21.
 */
(function () {

    //创建 services 模块
    var services = angular.module("app.services",[]);

    /*
    * 1.服务的名字 -> dataManager
    * 2.回调函数 -> 具体这个服务中的内容
    * */
    services.service("dataManager",function () {

        /*
        * 保存数据
        * key: 保存 读取数据时候的 唯一标识符
        * value: 具体保存的值
        * */
        this.save = function (key,value) {
            localStorage.setItem(key,value?JSON.stringify(value):null);
        };

        /*
        * 读取数据
        * key: 保存 读取数据时候的 唯一标识符
        * */
        this.read = function (key) {
            var resultString = localStorage.getItem(key);

            return resultString?JSON.parse(resultString):null;
        }

    });

})();