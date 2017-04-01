/**
 * Created by liuyujing on 2016/12/28.
 */
(function () {

    function TallyDBManager() {
        this.createTallyDB();
    }

    TallyDBManager.prototype = new DataBaseTool();

    TallyDBManager.prototype.createTallyDB = function () {
        this.db = this.createDB("tallyDB");

        if (this.db) {
            this.createTable("CREATE TABLE tally ('name','des','price');");
        }
    };

    TallyDBManager.prototype.insertTallyData = function (data) {
        if (this.db){
            this.insertData("INSERT INTO tally ('name','des','price') VALUES (?,?,?)",[data.name,data.des,data.price]);
        }
    };


    TallyDBManager.prototype.updateTallyData = function (content) {
        //UPDATE tally SET price=20 WHERE name='wer'

        var sql = "UPDATE tally SET price='"+content.price+"',des='"+content.des+"' WHERE name='"+content.name+"'";
        this.updateDB(sql);
    };

    TallyDBManager.prototype.searchTallyData = function (name,callback) {
          var sql = "SELECT * FROM tally WHERE name=?";
        this.searchData(sql,name,function (result) {
            if (callback) {
                callback(result);
            }
        });
    };

    TallyDBManager.prototype.getTallyAllData = function (callback) {
        var sql = "SELECT * FROM tally";
        this.getAllDatas(sql,function (result) {
            if (callback) {
                callback(result);
            }
        });
    };

    TallyDBManager.prototype.deleteTallyData = function (name) {
        var sql = "DELETE FROM tally WHERE name='"+name+"'";
        this.deleteData(sql);
    };

    window.TallyDBManager = TallyDBManager;
})();
