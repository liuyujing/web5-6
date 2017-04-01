/**
 * Created by liuyujing on 2017/1/3.
 */
(function () {

    //sessionStorage 只要关闭掉浏览器  之前保存的 数据 就会 清除
    //localStorage 只要不清除缓存 保存的数据就会 一直保存
    var STORAGE = localStorage;

    function init() {

        var nameInput = document.querySelector("#username");
        var passwordInput = document.querySelector("#password");
        var loginButton = document.querySelector("form button");

        loginButton.onclick = function (event) {
            event.preventDefault();

            //setItem 保存数据 (key,value)
            STORAGE.setItem("username",nameInput.value);
            STORAGE.setItem("password",passwordInput.value);
        };

        var getItemButton = document.querySelector(".getItemButton");
        var showContent = document.querySelector(".show-content");

        getItemButton.onclick = function () {
            //getItem 通过key 获取value
            showContent.innerHTML = STORAGE.getItem("username");
        };

        var removeUserNameButton = document.querySelector(".removeUserName-button");
        removeUserNameButton.onclick = function () {
            //removeItem 移除一条数据的方法  (key)
            STORAGE.removeItem("username");
            showContent.innerHTML = STORAGE.getItem("username");
        };

        var clearButton = document.querySelector(".clear-button");
        clearButton.onclick = function () {
            //clear 清除 所有数据的方法
            STORAGE.clear();
        };

        var getAllButton = document.querySelector(".getAll-button");
        getAllButton.onclick = function () {
            // console.log(STORAGE.key(1));

            var contentString = "";
            for (var i=0;i<STORAGE.length;i++){
                //key 根据下标 获得到  当前下标对应的 key(字符串)
                var key = STORAGE.key(i);
                var value = STORAGE.getItem(key);
                console.log(key,value);
                contentString+="<li>key:"+key+" value:"+value+"</li>";
            }

            showContent.innerHTML = "<ul>"+contentString+"</ul>";
        };

        // if (STORAGE.getItem("username")){
        //     console.log("已经登陆过");
        // }else {
        //     login();
        // }
    }

    init();

})();
