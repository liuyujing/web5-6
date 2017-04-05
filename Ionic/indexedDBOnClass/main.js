/**
 * Created by liuyujing on 2017/4/5.
 */
(function () {

    function init() {

        var addButton = document.querySelector("#add-button");

        var dbManager = new DBManager("pro",1);

        addButton.onclick = function () {
            dbManager.addObject("user",{
                name:"小名",
                phone:"1111111",
                age:30
            });
        };

    }

    init();
})();