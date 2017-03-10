/**
 * Created by liuyujing on 2017/3/9.
 */
(function () {


//    callback(回调函数) -> 希望获得 不确定时间  完成 之后的值

    //2.执行request这个函数
    function request(url,callback) {

        var req = new XMLHttpRequest();
        req.open("GET",url);
        //检测req 什么时候 加载完成 什么时候去调用
        req.onload = function () {
            //3.等 req 加载完成之后  就回去调用当前的函数体 -> 回去 执行 callback:function
            callback(JSON.parse(req.response));
        };
        req.send();
    }
    //4.执行 success
    function success(result) {
        console.log(result);
    }
    /*
    1.调用 写好的 request这个函数
     参数：
        url:string
        callback:function
     */
    request("package.json",success);
//    5.继续执行
//     request("",function (result) {
//     });

})();