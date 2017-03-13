/**
 * Created by liuyujing on 2017/3/13.
 */
(function () {

    function DataManager() {}

    DataManager.inserData = function (list) {
        window.localStorage.setItem("bookList",list?JSON.stringify(list):"[]");
    };

    DataManager.readData = function () {

        var result = window.localStorage.getItem("bookList");

        return result?JSON.parse(result):[];
    };

    window.DataManager = DataManager;
})();