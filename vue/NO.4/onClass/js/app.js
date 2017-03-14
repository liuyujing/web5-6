/**
 * Created by liuyujing on 2017/3/14.
 */
(function () {

    //两个组件
    var view1 = {template:"<div>view1</div>"};
    var view2 = {template:"<div>view2</div>"};

    //路由对象内容
    //component里面的内容 是在 router-view中显示的
    //path 指定的路径 是通过  router-link （to）指定跳转的
    var route1 = {path:"/home",component:view1};
    var route2 = {path:"/find",component:view2};
    
    //路由对象的配置
    var routerConfig = {
        routes:[
            route1,
            route2
        ]
    };
    //创建 路由对象
    var router = new VueRouter(routerConfig);


    //创建VUE对象的配置
    var vueConfig = {
        el:"#app",
        //必须注册了路由 才可以使用
        router:router,
        data: {
            selected:"外卖"
        }
    };
    new Vue(vueConfig);

})();