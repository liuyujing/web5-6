/**
 * Created by liuyujing on 2017/4/6.
 */

//require 引入模块 -> 引入js文件
    //http -> node.js中提供的模块
var http = require("http");
var server = http.createServer(function (request,response) {

    console.log(request.url);
    switch (request.url){
        case "/login":
            var data = {
                code:2000,
                message:"登录成功",
                data:{
                    name:"小明",
                    age:30
                }
            };

            response.write(JSON.stringify(data));
            break;
        case "/register":
            response.write("zhuce");
            break;
    }

//    request 客户端 发送过来的请求
//    response 服务端发送给客户端的响应
//     response.end("hello server!");
});
//在哪一个端口 执行服务
server.listen(8888);

//可以通过 node XX.js 启动服务器

console.log("服务器正在执行中...");