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
// process.env = {
//     MYSQL_HOST:"w.rdc.sae.sina.com.cn",
// MYSQL_PORT:3307,
// ACCESSKEY:"y2z02z4k2x",
// SECRETKEY: "iwjizz4yjx53125kiil2m3j5kzjzzwzx12lmjl13",
// APPNAME:"secretaryapp"
// };


// var dbConfig = {
//     host     : process.env.MYSQL_HOST,
//     port     : process.env.MYSQL_PORT,
//     user     : process.env.ACCESSKEY,
//     password : process.env.SECRETKEY,
//     database : 'app_' + process.env.APPNAME
// };


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

/*
* 搜索用户
* info
* phone username
* */
DBManagerTool.searchAllUsers = function (info) {

    //phone LIKE 1 OR username LIKE '234'
    // var params = [];
    //
    // for (key in info){
    //     params.push(key+" LIKE "+info[key]);
    // }

    //LIKE
    //"SELECT * FROM `user` WHERE user_id NOT 8 AND username LIKE "+info
    var sql = "SELECT * FROM `user` WHERE username LIKE '%"+info+"%'";

    console.log(sql);
    return dbManager.opretation(sql);
};


//------------录入相关-------------
DBManagerTool.addRecoder = function (info) {


    info.userID = parseInt(info.userID);
    var isPublic = info['public[isPublic]']?info['public[isPublic]']:0;
    var statusNum = info['status[statusNum]']?info['status[statusNum]']:0;
    var lat = info['location[point][lat]']?info['location[point][lat]']:0;
    var lng = info['location[point][lng]']?info['location[point][lng]']:0;

    var sql = "INSERT INTO `recoder`(`user_id`, `is_public`, `title`, `des`, `alert_time`, `status`, `lat`, `lng`, `address`) VALUES ("+info.userID+","+isPublic+",'"+info.title+"','"+info.des+"','"+info.alertTime+"',"+statusNum+","+lat+","+lng+",'"+info['location[address]']+"');";

    return dbManager.opretation(sql);
};

//删除是保存到 垃圾箱 不是从数据库删除
//清空垃圾箱从数据库删除
DBManagerTool.deleteRecoder = function (id) {

    var sql = "UPDATE `recoder` SET  `is_remove`=1 WHERE `recoder_id`="+id;

    return dbManager.opretation(sql);
};

/*
* restoreRecoder 还原单条数据的 数据库操作方法
* id 记录 的 id(recoder_id)
* */
DBManagerTool.restoreRecoder = function (id) {

    var sql = "UPDATE `recoder` SET  `is_remove`=0 WHERE `recoder_id`="+id;

    return dbManager.opretation(sql);
};

/*
* searchRecoder:查询《记录》
* isRemove 查询是否删除的记录 0未删除 1删除（查询显示在垃圾桶中的记录）
* userID 用户ID 区分是哪一个用户
* */
DBManagerTool.searchRecoder = function (isRemove,userID) {

    var sql = "SELECT * FROM `recoder` WHERE is_remove="+isRemove+" and user_id="+userID;

    return dbManager.opretation(sql);
};

DBManagerTool.updateRecoder = function (info) {

    var sql = "";

    return dbManager.opretation(sql);
};

/*
* clearRecoder 从数据库 清空单条数据的方法
* recoderID 记录的id
* */
DBManagerTool.clearRecoder = function (recoderID) {

    var sql = "DELETE FROM `recoder` WHERE recoder_id="+recoderID;

    return dbManager.opretation(sql);
};

//清除垃圾箱内所有的数据
DBManagerTool.clearAllOfTrash = function (userID) {

    var sql = "DELETE FROM `recoder` WHERE is_remove=1 AND user_id="+userID;

    return dbManager.opretation(sql);
};


module.exports = DBManagerTool;
