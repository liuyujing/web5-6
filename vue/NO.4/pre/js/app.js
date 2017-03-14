/**
 * Created by liuyujing on 2017/3/13.
 */
(function () {

    var page1 = {
        template:"<div><router-link to='/next'>next</router-link><router-view></router-view></div>"
    };
    var page2 = {
        template:"<div>page2</div>"
    };
    var nextpage = {
        template:"<div>nextpage</div>"
    };

    var routes = [
        {path:"/",component:page1,children:[
            {path:"next",component:nextpage}
        ]},
        {path:"/find",component:page2}
    ];

    var router = new VueRouter({
        routes:routes
    });

    var config = {
        el:"#app",
        router:router,
        components:{
            "list-view":components.listView
        },
        methods: {
            handleClick: function () {
                this.$toast('Hello world!')
            }
        },
        data:{
            selected:"外卖"
        }
    };
    new Vue(config);
})();