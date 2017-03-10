/**
 * Created by liuyujing on 2017/3/10.
 */
(function () {

    var web = {
        template:"<ul><li>111</li><li>222</li></ul>"
    };

    //是 M V VM 中的View层
    var ucai = {
        //datas 视图组件中的 属性
        props:["datas"],
        template:"<div><h1 v-text='message'></h1><ul><li v-for='info in datas' v-text='info'></li></ul></div>",
        data:function () {
            return {
                message:"你好",
                num:33
            }
        }
    };

    class App {

        constructor(mark){

            var config = {
                el:mark,
                components:{
                    "web":web,
                    "ok":ucai
                },
                data:{
                    list:[111,222,333,444],
                    list2:["wer","werw","dsf","sdfger"]
                }
            };

            new Vue(config);
        }
    }

    new App("#app");
})();