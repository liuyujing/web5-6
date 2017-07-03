/**
 * Created by liuyujing on 2017/4/7.
 *
 *
 * 具体 执行  sql语句的方法 （直接操作数据库）
 */

//引入数据库操作的类
var DBManger = require("./DBManager");

//配置数据库的信息
var dbConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"mysecretary"
};

//创建数据库操作的对象  并连接 数据库
var dbManager = new DBManger(dbConfig);

function DBManagerTool() {}

//------------用户相关-------------
//添加用户 -> 注册的api中 调用 添加用户
DBManagerTool.addUser = function (userInfo) {

    //具体是什么操作  sql语句决定
    //sql -> 添加用户
    var sql = "INSERT INTO `user`(`username`, `password`, `phone`) VALUES ('"+userInfo.username+"','"+userInfo.password+"','"+userInfo.phone+"')";

    //可以通过  dbManager对象  直接调用opretation操作数据库
    return dbManager.opretation(sql);
};

/*
* searchUser 查询用户
* message 查询的内容 {phone:"111",username:"111"}
* 可以只传一个参数
* */
DBManagerTool.searchUser = function (message) {
    var phone = message.phone?message.phone:"";
    var name = message.username?message.username:"";

   var sql = "SELECT * FROM `user` WHERE `phone` = '"+phone+"' OR `username`='"+name+"'";
    return dbManager.opretation(sql);
};

module.exports = DBManagerTool;
