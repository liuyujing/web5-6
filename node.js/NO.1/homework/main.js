/**
 * Created by liuyujing on 2017/4/6.
 */
(function () {


    var dbManager = new DBManager("dbName",2);

    document.querySelector("#add-button").onclick = function () {
        // dbManager.addData("user",{name:"小米功能",age:30,phone:"110"});

        dbManager.searchAllData("user").then(function (result) {
            console.log(result);
        });

    };

})();