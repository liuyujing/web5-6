/**
 * Created by liuyujing on 2017/3/10.
 */

(function () {

    class App {
        constructor(mark){

            var config = {
                el:mark,
                data:{
                    list:[
                        {name:"www",isOnStudy:false},
                        {name:"qqq",isOnStudy:false},
                        {name:"eee",isOnStudy:false}
                        ],
                    type:"class1",
                    ucaiType:"class2",
                    isChoose:true
                },
                methods:{
                    checkStudy:function (info) {
                        console.log(info);
                        info.isOnStudy = !info.isOnStudy
                    }
                },
                watch:{
                    "list":{
                        handler:function (newValue,oldValue) {
                            console.log(newValue);
                            console.log(oldValue);
                        },
                        //如果不设置 deep属性的话 默认是浅复制
                        deep:true
                    }
                }
            };
            this.vue = new Vue(config);
        }
    }

    new App("#app");

})();