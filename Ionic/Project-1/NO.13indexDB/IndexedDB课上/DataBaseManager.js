/**
 * Created by liuyujing on 2017/1/4.
 */
(function () {

    function DataBaseManager(name,version) {

        this.openDB(name,version);

    }

    /*
    * openDB 打开数据库
    * name:数据库的名字
    * version:数据库的版本
    * */
    DataBaseManager.prototype.openDB = function (name,version) {
        /*
        * indexedDB.open webAPI中提供给打开数据库的函数
        * 会得到 打开数据库之后的请求
        * */
        var request = indexedDB.open(name,version);

    //    成功打开数据库 调用的 方法
        request.onsuccess = function (event) {
            /*
            * 获取数据库对象
            * 1.request 中的result
            * 2.event -> IDBOpenDBRequest(request) -> result
            * */
            //获取 数据库对象
            this.db = event.target.result;
            // console.log(this,event);
            // console.log(event);

        //bind()可以绑定一个 外部的变量到 另外一个函数
        //把外部的this(DataBaseManager实例化出来的对象) 绑定到 onsuccess这个函数中 -> onsuccess里面的this 就代表 DataBaseManager实例化出来的对象
        }.bind(this);

    //    添加 打开数据出现错误的时候的 监听事件
        request.onerror = function (error) {
            console.log(error.target.error);
        };

    //    当数据库版本 发生改变的时候的 监听事件
        request.onupgradeneeded = function (event) {
            // console.log(this,event);
            //获取 数据库对象
            var database = this.result;

            //objectStoreNames 里面存放的是 所有的 表名
            //contains:判断是或否包含 某个内容
            console.log(database.objectStoreNames.contains("user"));
            if (!database.objectStoreNames.contains("user")) { //相当于是  sql中的 建表
                var store = database.createObjectStore("user", {keyPath: "name"});
                //相当于是  sql中的 添加字段
                store.createIndex("name", "name", {unique: true});
                store.createIndex("age", "age");
            }

        }
    };

    DataBaseManager.prototype.addData = function (data) {
        /*
        * 通过 数据库 对象  创建 事务的对象 并赋予 事务对象的读写权限
        * 会获得 事务的对象
        * */
        var transaction = this.db.transaction(["user"],"readwrite");

        /*
        * objectStore() 通过 事务对象  获取 类似sql表 的对象
        * 得到 这个对象之后  就可以  进行 增删改查
        * */
        var objectStore =  transaction.objectStore("user");
        var request = objectStore.add(data);
        console.log(request);
    };

    DataBaseManager.prototype.updateData = function (data) {

        var transaction = this.db.transaction(["user"],"readwrite");
        var objectStore = transaction.objectStore("user");
        var request = objectStore.put(data);
        console.log(request);
    };

    DataBaseManager.prototype.deleteData = function (name) {

        var transaction = this.db.transaction(["user"],"readwrite");
        var objectStore = transaction.objectStore("user");
        var request = objectStore.delete(name);
        console.log(request);
        request.onsuccess = function () {
            console.log("删除成功!");
        }
    };

    DataBaseManager.prototype.searchAllData = function (callback) {
        var transaction = this.db.transaction(["user"]);
        var objectStore = transaction.objectStore("user");
        var request = objectStore.getAll();

        request.onsuccess = function (event) {
            console.log(this,event);
            //查询到的结果
            var result = this.result?this.result:null;

            callback(result);
        }
    };

    DataBaseManager.prototype.searchData = function (data,callback) {

        var transaction = this.db.transaction(["user"]);
        var objectStore = transaction.objectStore("user");
        var indexStore = objectStore.index("name");
        var request = indexStore.get(data);

        request.onsuccess = function () {
            console.log(this);

            if (callback) {
                callback(this.result);
            }
        };
    };

    window.DataBaseManager = DataBaseManager;

})();
