/**
 * Created by liuyujing on 2016/12/28.
 */
(function () {

    function DataBaseTool() {
    }


    DataBaseTool.prototype.createDB = function (dataBaseName) {

        /**
         *
         * @type {Database}
         */
        this.dataBase = openDatabase(dataBaseName,1.0,dataBaseName,5*1024*1024);
        return this.dataBase;
    };

    DataBaseTool.prototype.createTable = function (sql) {
        this.dataBase.transaction(function (transaction) {
            transaction.executeSql(sql);
        })

    };

    DataBaseTool.prototype.insertData = function (sql,values) {
        this.dataBase.transaction(function (transaction) {
            console.log(sql);
            transaction.executeSql(sql,values);
        })
    };

    DataBaseTool.prototype.updateDB = function (sql) {
        this.dataBase.transaction(function (transaction) {
            console.log(sql);
            transaction.executeSql(sql);

        });
    };

    DataBaseTool.prototype.deleteData = function (sql) {
        this.dataBase.transaction(function (ts) {
            ts.executeSql(sql);
        });
    };

    DataBaseTool.prototype.searchData = function (sql,name,callback) {
        this.dataBase.transaction(function (ts) {
            ts.executeSql(sql,[name],function (ts,result) {
                if (callback) {
                    callback(result.rows);
                }
            });
        },function (ts,error) {
            console.log(error);
        });
    };

    DataBaseTool.prototype.getAllDatas = function (sql,callback) {
        this.dataBase.transaction(function (ts) {
            ts.executeSql(sql,[],function (ts,result) {
                // console.log(result);
                if (callback) {
                    callback(result.rows);
                }
            });
        });
    };

    DataBaseTool.prototype.deleteTable = function (sql) {
        this.dataBase.transaction(function (ts) {
           ts.executeSql(sql,[],function () {
                console.log("第一个");
           },function () {
               console.log("第er个");
           });
        });
    };


    window.DataBaseTool = DataBaseTool;
})();
