/**
 * Created by liuyujing on 2017/3/7.
 */

//回调函数(callback):用于 不确定 什么时候  会加载完成

// 不管是 函数
// 还是   类名
// 还是   对象
// 都可以 被当做参数来传递

// function fun1(a) {
//     var cc = 20;
// }
//
// console.log(fun1);
//
// function fun2(f1) {
//     console.log(f1);
// }
//
// fun2(fun1);

//-------------------------------

// //-----2.
// function fun2(fun) {
//     //-----3.
//     fun();
// }
//
// function fun1() {
// //    --------4.
// }
// // fun2(function () {
// //
// // });
//
// //----1.
// fun2(fun1);


//-----------------------
// function fun2(fun) {
//     console.log("被调用了");
// //    fun 传过来的函数名
//     fun("123");
// }
//
// fun2(function (a) {
//     console.log("我终于被调用了",a);
// });

//----------------------

function HttpManager(url,callback) {

    var request = new XMLHttpRequest();
    request.open("get",url);
    request.onload = function () {
        callback(request.response);
    };
    request.send();

}

HttpManager("data.json",function (a) {
    console.log("OKOKOK~",a);
});



