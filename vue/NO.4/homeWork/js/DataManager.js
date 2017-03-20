/**
 * Created by liuyujing on 2017/3/15.
 */
(function () {

    function DataManager() {}

    DataManager.insertData = function (key,value) {

        if(!value){
            throw {
                error:"没有传入值"
            }
        }

        //尝试执行 try中的代码
        try {
            localStorage.setItem(key,value?JSON.stringify(value):null);

            //代码出现错误 就会 抛出（扔出）一个异常

        }
        //在catch中可以捕捉到  throw 中 抛出的异常信息
        catch (error){
            console.log(error);
        }

    };

    DataManager.readData = function (key) {

        var resultString = localStorage.getItem(key);

        return resultString?JSON.parse(resultString):null;
    };

    window.DataManager = DataManager;
})();