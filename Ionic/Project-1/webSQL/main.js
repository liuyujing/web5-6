/**
 * Created by liuyujing on 2017/3/28.
 */
(function () {

    /*
     * 1. 打开数据库
     * name 数据库的名字
     * version 数据库的版本
     * displayName 数据库显示的名字
     * estimatedSize 数据库的容量
     * creationCallback 操作完成之后的回调函数
     * */
    var database = openDatabase("websql",1.0,"websql",5*1024*1024,function (result) {
        console.log(result);
    });


    document.querySelector("#create-table-button").onclick = function () {
        createTable();
    };


    document.querySelector("#add-data-button").onclick = function () {
        add();
    };

    document.querySelector("#delete-data-button").onclick = function () {
        deleteData();
    };


    document.querySelector("#update-data-button").onclick = function () {
        updateInfo();
    };


    document.querySelector("#search-data-button").onclick = function () {
        searchData();
    };


    function searchData() {

        /*
        * sqlStatement:sql语句
        * arguments:实参
        * callback:回调函数
        * errorCallback:错误时候的回调函数
        * */
        var searchSQL = "SELECT * FROM recoder;";
        database.transaction(function (ts) {
            ts.executeSql(searchSQL,[],function (ts,result) {
                //result得到的结果集
                //可以通过rows 得到结果数组
                console.log(result.rows);

                var listView = document.querySelector(".result-content");

                var allHTML = "";
                for (var i=0;i<result.rows.length;i++){
                    var info = result.rows[i];
                    var item = "<li><h1>"+info.title+"</h1><p>"+info.des+"</p></li>";
                    allHTML+=item;
                }

                listView.innerHTML = allHTML;
            });
        })
    }

    function updateInfo() {

        var updateSQL = "";
        database.transaction(function (ts) {
            ts.executeSql(updateSQL);
        })
        
    }

    function deleteData() {

        var deleteSQL = "DELETE FROM recoder WHERE id=2";
        database.transaction(function (ts) {
           ts.executeSql(deleteSQL);
        });

    }


    function createTable() {
        /*
         * 2. 建表
         * callback:只要调用了 都会去调用的回调函数
         * errorCallback:执行出现错误
         * successCallback:执行成功
         * */

        var createTableSQL = "CREATE TABLE recoder ('id','title','des')";
        database.transaction(function (transactionObj) {
            transactionObj.executeSql(createTableSQL);
        });
    }

    function add() {

        var addSQL = "INSERT INTO recoder ('id','title','des') VALUES (2,'会议记录2','大家今天需要开会2');";
        database.transaction(function (ts) {
           ts.executeSql(addSQL);
        });
    }

})();