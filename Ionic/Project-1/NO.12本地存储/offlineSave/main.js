/**
 * Created by liuyujing on 2016/12/27.
 */

(function () {

    function init() {

        login();

    }

    function login() {
        var isLogin = localStorage.getItem("username")=="xiaoming"&&localStorage.getItem("password")=="123456";
        document.querySelector("header section").innerHTML = isLogin?"<img src='image.jpg' width='50px'>":"<a>登录</a>";

        if (!isLogin){
            var loginButton = document.querySelector("header section a");
            loginButton.onclick = function (e) {
                e.preventDefault();
                createLoginView();
            };
        }

    }

    function createLoginView() {
        var loginContainer = document.createElement("div");

        loginContainer.className = "login-container";

        loginContainer.innerHTML = "<div>帐号:<input type='text'></div><div>密码:<input type='password'></div><button>登录</button>";

        document.body.appendChild(loginContainer);

        var usernameInputView = document.querySelector(".login-container input[type=text]");
        var passwordInputView = document.querySelector(".login-container input[type=password]");
        var loginButton = document.querySelector(".login-container button");

        loginButton.onclick = function () {
            console.log(usernameInputView.value,passwordInputView.value);

            if (usernameInputView.value == "xiaoming" && passwordInputView.value == "123456"){

                localStorage.setItem("username",usernameInputView.value);
                localStorage.setItem("password",passwordInputView.value);

                document.body.removeChild(loginContainer);

                console.log(localStorage.getItem("ww"));
                document.querySelector("header section").innerHTML = "<img src='image.jpg' width='50px'>";
            }
        }
    }

    init();

})();