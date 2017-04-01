/**
 * Created by liuyujing on 2016/12/28.
 */
(function () {

    function init() {

        var dbManger = new TallyDBManager();

        addItem(dbManger);
        showResult(dbManger);
    }

    function addItem(db) {
        var dataName =  document.querySelector("#data-name");
        var dataDes =  document.querySelector("#data-des");
        var dataPrice =  document.querySelector("#data-price");
        var saveButton =  document.querySelector(".save");
        saveButton.onclick = function () {

            // db.insertTallyData({name:dataName.value,des:dataDes.value,price:dataPrice.value});

            // db.updateTallyData({name:dataName.value,des:dataDes.value,price:dataPrice.value});

            // db.searchTallyData("wer");

            db.deleteTallyData("12345");
            showResult(db);
        };

    }


    function showResult(db) {
        var container = document.querySelector(".history-data-listview");
        db.getTallyAllData(function (result) {

            var str = "";
            for (var i=0;i<result.length;i++){
                var row = result[i];
                str += ("<li><h3>名字："+row.name+"</h3><p>描述："+row.des+"</p><p>价格："+row.price+"</p></li>");
            }
            container.innerHTML = str;
        });

    }

    init();
})();
