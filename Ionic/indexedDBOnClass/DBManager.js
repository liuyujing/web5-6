/**
 * Created by liuyujing on 2017/4/5.
 */
(function () {


    function DBManager(name,version) {

        this.openDB(name,version);

    }

    /*
    * openDB 打开数据库的方法
    * name 数据库的名字
    * version 数据库的版本号
    * */
    //todo: 打开数据库
    DBManager.prototype.openDB = function (name,version) {

        //IndexedDB每一个操作 最终会得到一个 IDBRequest 所有的结果  都在Request里面
        var request = indexedDB.open(name,version);
        // console.log(request.result);

        //打开数据库失败的时候 调用
        request.onerror = function (event) {
            console.log(event);
        };

        //打开数据库成功的时候  调用
        var self = this;
        request.onsuccess = function (event) {
            //在IDBOpenDBRequest 可以获得到result ->数据库的对象
            self.db = this.result;

            console.log(self.db);
        };

        //只要有版本更新的时候 调用
        //可以在 版本更新的时候  去操作建表的方法
        //第一次的时候 没版本号 -> 有版本号
        //其他时候 更改版本号
        request.onupgradeneeded = function () {
            console.log("更新",request.result);
            self.db = this.result;
            self.createTable("user",["name","phone","age"]);
        };
    };

    //todo: objectStore 建表 添加字段
    // {indexName:"name",{}}
    /*
    * createTable 创建表的方法
    * osName ：表的名字 createObjectStore
    * indexs ：字段的数组 createIndex
    * [{name:'',option:{}}]
    * */
    DBManager.prototype.createTable = function (osName,indexs) {

        //创建objectStore -> 在建表
        var os = this.db.createObjectStore(osName,{keyPath:indexs[0]});

    //    创建索引 -> 添加字段
        for (var i=0;i<indexs.length;i++){
            os.createIndex(indexs[i],indexs[i]);
        }
    };


    /*
    * addObject 添加数据
    * osName 表的名字（objectStore的名字）
    * object 要添加的内容
    * */
    DBManager.prototype.addObject = function (osName,object) {
        var os = this.db.transaction([osName],"readwrite").objectStore(osName);

        var request = os.add(object);
        //put 修改
        //delete 删除 
        //get 查找
        request.onerror = function (event) {
            console.log(event);
        };
        request.onsuccess = function (event) {
            console.log("添加成功",event);
        };
    };

    window.DBManager = DBManager;

})();




// var request = indexedDB.open("dbName",1);
//
// request.onerror = function () {
//
// };
//
// var db;
// request.onsuccess = function () {
//     db = this.result;
// };
//
// request.onupgradeneeded = function () {
//
// };
//
// //创建 ObjectStore （类似websql中的表）
// var os = db.createObjectStore("user",{keyPath:"username"});
// //createIndex(索引的名字,键路径,可选项) 索引的名字与键路径相同的字符串
// os.createIndex("phone","phone",{unique:true});
// os.createIndex("age","age");

//索引的名字 :属性名 phone
//键路径 :在解析的时候 通过那个名字 来查找到 这个属性 p

// user = {
//     phone:"1111",
//     age:25
// };
//
// xxxxxx search -> p ->"1111" -> {phone:"1111",age:25};


// var ts = db.transaction(["user"],"readwrite");
// ts.add({name:"小明",phone:"1111",age:20});