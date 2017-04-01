/**
 * Created by liuyujing on 2017/1/3.
 */
(function () {


    function init() {

        var dbTool = new DataBaseTool();
        dbTool.openDB("tally","1.0");
        //unique 让某一个字段里面的内容  没有重复
        dbTool.createTable("CREATE TABLE user ('name' unique,'age')");

        var usernameInput = document.querySelector("#username");
        var ageInput = document.querySelector("#age");
        var saveButton = document.querySelector("form button");

        saveButton.onclick = function (event) {
            event.preventDefault();

            // dbTool.addData("INSERT INTO user ('name','age') VALUES ('"+usernameInput.value+"',"+ageInput.value+")",[]);
            dbTool.addData("INSERT INTO user ('name','age') VALUES (?,?)",[usernameInput.value,ageInput.value]);
        };


        var updataButton = document.querySelector(".updata-button");
        updataButton.onclick = function () {
            dbTool.updataDB("UPDATE user SET name=? WHERE name=?",[usernameInput.value,"vvv"]);
        };

        var getAllDataButton = document.querySelector(".getAllData-button");
        getAllDataButton.onclick = function () {
            // var sql = "SELECT * FROM user";
            var sql = "SELECT * FROM user WHERE name='"+usernameInput.value+"'";
            dbTool.searchAllData(sql,function (result) {
                console.log(result);
                for (var i=0;i<result.length;i++){
                    var info = result[i];
                    console.log(info.name,info.age);
                }
            });
        };

        var deleteButton = document.querySelector(".delete-button");
        deleteButton.onclick = function () {
            dbTool.deleteData("DELETE FROM user WHERE name='"+usernameInput.value+"'");
        };

    }

    function DataBaseTool() {}

    DataBaseTool.prototype.openDB = function (name,version) {
        /*
        * name 数据库的名字
        * version 数据库的版本
        * displayName 数据库显示的名字 一般与name是一致的
        * estimatedSize 预设数据库的容量
        * creationCallback 创建数据库的回调函数
        * */
        this.db = openDatabase(name,version,name,5*1024*1024,function (result) {
            console.log(result);
        });
    };

    /*
    * 建表的sql
    * CREATE TABLE 表名 ('字段1','字段2')
    * */
    DataBaseTool.prototype.createTable = function (sql) {
        //通过 数据库对象  创建 数据库操作的事务
        this.db.transaction(function (ts) {
            //所有的操作  都是根据 事务 进行操作
            ts.executeSql(sql);
        });
    };

    //添加数据
    //INSERT INTO user ('name','age') VALUES ('xiaoming',20)
    DataBaseTool.prototype.addData = function (sql,values) {

        this.db.transaction(function (ts) {
            ts.executeSql(sql,values);
        });
    };

    //修改更新数据
    //UPDATE user SET name='小明' WHERE name="vvv"
    DataBaseTool.prototype.updataDB = function (sql,values) {
        this.db.transaction(function (ts) {
            ts.executeSql(sql,values);
        });
    };

    DataBaseTool.prototype.searchAllData = function (sql,callback) {

        /*
        * transaction()
        * callback:只要执行了事务函数 的回调
        *   ts:事务的对象
        * errorCallback:执行事务函数 出错 调用
        * successCallback: 执行事务函数 成功 调用
        * */
        // this.db.transaction(function (ts) {

            // console.log(arguments);
            /*
            * executeSql()
            * sqlStatement:sql语句
            * arguments:参数（去替换？？的参数）
            * callback:执行sql语句 没有问题的情况下 调用
            *   ts:事务的对象
            *   result:一般用于查询  是查询后的结果集
            * errorCallback:执行sql语句 出现问题的时候  调用
            * */
        //     ts.executeSql(sql,[],function (ts,result) {
        //         console.log("结果集:",result);
        //
        //         if (callback) {
        //             callback(result.rows);
        //         }
        //
        //     },function (error) {
        //         console.log("执行sql语句出现错误:",error);
        //     });
        // },function (error) {
        //     console.log("执行事物函数错误:",error);
        // },function (result) {
        //     console.log("执行事物函数 成功:",result);
        // });


        //SELECT * FROM 表名
        //SELECT * FROM 表名 WHERE name=?
        this.db.transaction(function (ts) {
            ts.executeSql(sql,[],function (transaction,result) {
                if (callback) {
                    callback(result.rows);
                }
            });
        });

    };

    DataBaseTool.prototype.deleteData = function (sql) {
        this.db.transaction(function (ts) {
            ts.executeSql(sql);
        });
    };

    init();
    
})();