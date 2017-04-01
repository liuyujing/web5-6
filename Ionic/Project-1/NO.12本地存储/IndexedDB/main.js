/**
 * Created by liuyujing on 2016/12/29.
 */
(function () {

    function init() {

        var dbManager = new DBManager(function () {
            dbManager.getAllData(function (result) {
                showDatas(result);
            });
        });

        var savaButton = document.querySelector(".save");
        var nameInput = document.querySelector("#name");
        var ageInput = document.querySelector("#age");
        var deleteButton = document.querySelector(".delete");
        var searchButton = document.querySelector(".search");

        savaButton.onclick = function () {

            var data = {name:nameInput.value,age:ageInput.value};
            dbManager.addData(data);
            dbManager.getAllData(function (result) {
                showDatas(result);
            });
        };

        deleteButton.onclick = function () {
            dbManager.deleteDataForName(nameInput.value);
            dbManager.getAllData(function (result) {
                showDatas(result);
            });
        };

        searchButton.onclick = function () {
            dbManager.searchDataForName(nameInput.value,function (result) {
                showDatas(result);
            });

        };

    }

    function showDatas(list) {
        var container = document.querySelector(".data-list");

        var domString = "";

        if (list instanceof Array){
            for (var i=0;i<list.length;i++){
                var item = list[i];

                domString += "<li>"+item.name+""+item.age+"</li>";
            }
        }else {
            domString += "<li>"+list.name+""+list.age+"</li>";
        }
        container.innerHTML = domString;
    }

    init();

})();
