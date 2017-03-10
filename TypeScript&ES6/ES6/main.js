/**
 * Created by liuyujing on 2017/3/7.
 */

class Person {

}

var message = "消息";
var name = `nihao 
buhao 
${message}`;


//Promise:可以通过 Promise实现异步加载
//Promise可以替换掉 回调函数 可以实现 异步加载
var promise = new Promise(function (res,reject) {
    console.log(res,reject);
    res("123");
});

promise.then(function (result) {
    console.log(result);
});


// $.ajax().then(function (result) {
//
// });
function request(url) {
    return new Promise(function (res,reject) {

        var request = new XMLHttpRequest();
        request.open("get",url);
        request.onload = function () {
            if (res){
                //done then 来获得结果
                res(request.response);
            }else {
                //可以通过catch 捕获到 错误信息
                reject("error");
            }
        };
        request.send();
    })
}

request("data.json").then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});

// function abc(reuslt) {
//
// }
// function ccc(abc) {
//     abc("2312");
// }

//不知道 函数 什么时候  被调用
function HTTPManager(url,callback) {
    console.log(url);

    var result;
    var request = new XMLHttpRequest();
    request.open("get",url);

    //onload 加载完成的时候 执行
    request.onload = function () {
        result = request.response;
        console.log("结果"+result+"");
        callback(result);
    };

    request.send();

    // return result;
}

HTTPManager("data.json",function (result) {
   console.log("回调的结果:"+result+"");
});

// console.log(HTTPManager("data.json"));
