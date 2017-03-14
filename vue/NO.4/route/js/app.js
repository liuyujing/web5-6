/**
 * Created by liuyujing on 2017/3/14.
 */
(function () {

    //初始化  路由的对象
    var router = new VueRouter({
        routes:[
            {path:"/",component:ucai.home},
            {path:"/order",component:ucai.order},
            {path:"/find",component:ucai.find},
            {path:"/setting",component:ucai.setting}
        ]
    });

    var vue = new Vue({
        el:"#app",
        data:{
            selected:"外卖"
        },
        router:router
    });


})();