/**
 * Created by liuyujing on 2017/4/6.
 */

//mysql这个模块中 提供了  数据库操作的方法
//引入mysql模块
var mysql = require("mysql");

function DBManager(dbConfig) {

    this.connectDB(dbConfig);
}

//连接数据库
DBManager.prototype.connectDB = function (dbConfig) {

    this.connection = mysql.createConnection(dbConfig);

    this.connection.connect();

    this.opretation("CREATE TABLE `recoder` (`recoder_id` bigint(255) NOT NULL PRIMARY KEY,`user_id` bigint(255) NOT NULL,`is_remove` int(10) NOT NULL DEFAULT '0',`is_public` int(10) NOT NULL DEFAULT '0',`is_finish` int(10) NOT NULL DEFAULT '0',`title` varchar(255) NOT NULL,`des` varchar(255) NOT NULL,`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,`alert_time` bigint(255) NOT NULL DEFAULT '0',`status` int(10) NOT NULL DEFAULT '0',`lat` bigint(255) NOT NULL DEFAULT '0',`lng` bigint(255) NOT NULL DEFAULT '0',`address` varchar(255) NOT NULL)");

    this.opretation("CREATE TABLE `user` (`user_id` bigint(20) NOT NULL PRIMARY KEY,`username` varchar(100) NOT NULL UNIQUE,`password` varchar(50) NOT NULL DEFAULT '000000',`phone` bigint(11) NOT NULL UNIQUE,`uuid` bigint(20) NOT NULL UNIQUE,`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)");
};

//数据库操作的方法
DBManager.prototype.opretation = function (sql) {

    return new Promise(function (res,rej) {

        this.connection.query(sql,function (error,result) {

            if (error){
                rej(error);
            }else {
                res(result);
            }

        });

    }.bind(this));
};

module.exports = DBManager;
