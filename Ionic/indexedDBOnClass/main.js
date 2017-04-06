/**
 * Created by liuyujing on 2017/4/5.
 */
(function () {

    function init() {

        var addButton = document.querySelector("#add-button");
        var updateButton = document.querySelector("#update-button");
        var dbManager = new DBManager("pro",1);

        var userInfo = {
            name:"小名",
            phone:"1111111",
            age:30
        };
        addButton.onclick = function () {
            dbManager.addObject("user",userInfo);
        };

        updateButton.onclick = function () {
            userInfo.age = 55;
            dbManager.updateObject("user",userInfo);
        };

        document.querySelector("#search-button").onclick = function () {

            dbManager.searchObject("user",userInfo.name,function (result) {
                console.log("搜索到的结果",result);
            });

        };

        document.querySelector("#delete-button").onclick = function () {
            dbManager.deleteObject("user",userInfo.name);
        };

    }

    init();
})();