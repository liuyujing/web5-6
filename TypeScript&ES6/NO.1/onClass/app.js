/**
 * Created by liuyujing on 2017/3/6.
 */
// var name = "";
/*
var age:number;
// age = "";
age = 22;

let score:number = 33;

var name:string;
name = "小红";

//static 声明 静态 变量 或 静态  方法 的 关键字
static var HOST:string = "www.baidu.com";

// var list = ["12","123"];
// var list = [12,343];

var list:Array<number> = [22,43,545];

// function Person (){};
class Person{}


var persons:Array<Person> = [];
var psers:Person[] = [];
*/
//元组
var list = ["字符串", true, 2000];
// list = [200,200,200];
// var QQ = 0;
// var WECHAT = 1;
// var WEIBO = 2;
// var loginType = [QQ,WECHAT,WEIBO,WEIBO];
var LoginType;
(function (LoginType) {
    LoginType[LoginType["QQ"] = 10] = "QQ";
    LoginType[LoginType["WECHAT"] = 15] = "WECHAT";
    LoginType[LoginType["WEIBO"] = 16] = "WEIBO";
})(LoginType || (LoginType = {}));
var loginType;
// loginType = 0;
console.log(LoginType.QQ);
console.log(LoginType.WEIBO);
//# sourceMappingURL=app.js.map