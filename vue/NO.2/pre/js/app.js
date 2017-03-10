/**
 * Created by liuyujing on 2017/3/10.
 */
(function () {


    var listView = {
        props:["datalist","show"],
        template:"<ul><li v-for='item in datalist' v-text='item.name' @click='show'></li><li>{{mydata}}</li></ul>",
        data:function () {
            return {
                mydata:"333"
            }
        }
    };
    var listView2 = {
        props:["datalist","show"],
        template:"<ul><li v-for='item in datalist' v-text='item.name' @click='show'></li></ul>"
    };



    var routers = [
        {path:"/",component:listView},
        {path:"/find",component:listView2}
        ];

    var router = new VueRouter({
        routes:routers
    });
    new Vue({
        el:"#app",
        data:{
            list:[{name:"cc",isSelect:false},{name:"eee",isSelect:false},{name:"ttt",isSelect:false},{name:"www",isSelect:false},{name:"tgf",isSelect:false}]
        },
        methods:{
            changSelect:function (item) {
            item.isSelect = !item.isSelect;
            },
            show:function () {
                alert("");
            }
        },
        watch:{
            "list":{
                handler:function (newValue,oldValue) {
                    console.log(newValue,oldValue);
                },
                deep:true
            }

        },
        // components:{
        //     "list-view":listView
        // }
        router:router
    })

})();