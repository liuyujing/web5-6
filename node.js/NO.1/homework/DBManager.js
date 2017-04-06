/**
 * Created by liuyujing on 2017/4/6.
 */
(function () {

    function DBManager(dbName,dbVersion) {
        this.openDB(dbName,dbVersion);
    }

    DBManager.prototype.openDB = function (dbName,dbVersion) {

        var request = indexedDB.open(dbName,dbVersion);

        request.onerror = function () {
            console.log("打开数据库失败");
        };

        request.onsuccess = function (event) {
            this.db = event.target.result;
        }.bind(this);

        // var self = this;
        request.onupgradeneeded = function (event) {
            this.db = event.target.result;

            var indexs = [{name:"name",option:{unique:true}},{name:"age",option:{}},{name:"phone",option:{unique:true}}];
            this.createObjectStore("user",indexs);
        }.bind(this);
    };

    /*
    * createObjectStore 类似建表
    * osName（ObjectStoreName） 类似表名
    * indexs 字段名 [{name:"",option:{}}]
    * */
    DBManager.prototype.createObjectStore = function (osName,indexs) {
        var osNames = [];
        for (var i=0;i<this.db.objectStoreNames.length;i++){
            osNames.push(this.db.objectStoreNames[i]);
        }
        if (!osNames.concat(osName)) {

            if (indexs&&indexs.length>0) {

            //创建类似 表 的对象
            var os = this.db.createObjectStore(osName, {keyPath: indexs[0].name});

            //遍历类似于 字段数组
            indexs.forEach(function (info) {
                //创建字段
                os.createIndex(info.name,info.name,info.option);
            });

        }   else {
                console.log("请传入相应的索引信息");
            }
        }
    };

    /*
    * 数据库操作方法
    * osName 类似表的名字
    * methodName 数据库操作的方法  string
    * param 参数 任意类型
    * */
    DBManager.prototype.operation = function (osName,methodName,param) {

        return new Promise(function (res,rej) {

            var os = this.db.transaction(osName,"readwrite").objectStore(osName);

            var request = null;
            switch (methodName){
                case "add":
                    request = os.add(param);
                    break;
                case "put":
                    request = os.put(param);
                    break;
                case "delete":
                    request = os.delete(param);
                    break;
                case "get":
                    request = os.get(param);
                    break;
                case "getAll":
                    request = os.getAll();
                    break;
            }

            request.onerror = function () {
                rej({code:3001,message:"数据库操作错误"});
            };

            request.onsuccess = function () {
                res({code:2000,message:"数据库操作成功",data:this.result});
            };

        }.bind(this));
    };

    DBManager.prototype.addData = function (osName,param) {
        return this.operation(osName,"add",param);
    };

    DBManager.prototype.updateData = function (osName,param) {
        return this.operation(osName,"put",param);
    };

    DBManager.prototype.deleteData = function (osName,param) {
        return this.operation(osName,"delete",param);
    };

    DBManager.prototype.searchData = function (osName,param) {
        return this.operation(osName,"get",param);
    };

    DBManager.prototype.searchAllData = function (osName) {
        return this.operation(osName,"getAll");
    };


    window.DBManager = DBManager;
})();