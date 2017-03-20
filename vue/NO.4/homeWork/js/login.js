/**
 * Created by liuyujing on 2017/3/15.
 */
(function () {

    window.login = {
        template:"<div><p><label for='username-input'>用户名:</label><input type='text' id='username-input' v-model='usermodel.username'></p><p><label for='type-input'>用户类型:</label><input id='type-input' type='number' v-model='usermodel.type'></p><p><label for='password-input'>密码:</label><input  id='password-input' type='password' v-model='usermodel.password'></p><button @click='login(usermodel)'>登录</button></div>",
        //username type password
        props:["usermodel"],
        methods:{
            login:function (userInfo) {
                this.$emit("login",userInfo);
            }
        }
    };


    Vue.component("login",login);
})();