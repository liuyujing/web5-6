/**
 * Created by liuyujing on 2016/12/29.
 */
(function () {

    function DBManager(callback) {
        if (!indexedDB) {
            console.log("浏览器不支持IndexedDB");
            return;
        }
        this.openDB(callback);
    }

    DBManager.prototype.openDB = function (callback) {

        var request = indexedDB.open("tally",2);

        request.onerror = function (event) {
            console.log(event.target);
        };

        request.onsuccess = function (event) {
            this.db = request.result
            ;

            if (callback) {
                callback();
            }

        }.bind(this);

        request.onupgradeneeded = function (event) {

            var db = request.result;
            if (!db.objectStoreNames.contains("info")){
                var objectStore = db.createObjectStore("info",{keyPath: "name"});
                objectStore.createIndex("name","name",{unique: true});
                objectStore.createIndex("age","age");
            }

        };

    };

    DBManager.prototype.addData = function (data) {
        var context = this.db.transaction("info","readwrite");

        this.objectStore = context.objectStore("info");
        var requset = this.objectStore.add(data);
        requset.onsuccess = function () {
            console.log("添加成功");
        }

    };

    DBManager.prototype.updateData = function (data) {
        var context = this.db.transaction("info","readwrite");
        this.objectStore = context.objectStore("info");
        var reuset = this.objectStore.put(data);
        if (reuset.result){
            console.log("更新成功");
        }
    };

    DBManager.prototype.deleteDataForName = function (name) {
        var context = this.db.transaction("info","readwrite");
        context.oncomplete = function () {
          console.log("delete complete!");
        };
        this.objectStore = context.objectStore("info");
        var request = this.objectStore.delete(name);
        request.onsuccess = function (event) {
            console.log("删除成功!",event);
        };
        request.onerror = function (e) {
            console.log(e);
            console.log("删除shibai!");
        }
    };

    DBManager.prototype.getAllData = function (callback) {
        var context = this.db.transaction("info");
        this.objectStore = context.objectStore("info");
        var request = this.objectStore.getAll();
        request.onsuccess = function () {
            console.log(request);
            if (request.result) {
                if (callback){
                    callback(request.result);
                }
            }else {
                alert("没查找到~");
            }
        };
    };

    DBManager.prototype.searchDataForName = function (name,callback) {
        var context = this.db.transaction("info");
        this.objectStore = context.objectStore("info");
        var request = this.objectStore.index("name").get(name);
        request.onsuccess = function () {
            console.log(request);
            if (request.result) {
                if (callback){
                    callback(request.result);
                }
            }else {
                alert("没查找到~");
            }
        };
    };

    window.DBManager = DBManager;

})();
