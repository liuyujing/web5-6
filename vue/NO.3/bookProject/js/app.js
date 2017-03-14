/**
 * Created by liuyujing on 2017/3/13.
 */
(function () {

    function App(mark) {
        this.init(mark);
    }
    App.prototype.init = function (mark) {

        //ccc :组件的变量名
        var ccc = {
            template:"<div @click='move'><p v-text='mmm'></p><p v-text='ppp'></p><p v-text='myprop'></p></div>",
            data:function () {
                return {
                    mmm:"必须是个函数",
                    ppp:"ttttt"
                }
            },
            props:["myprop"],                                  methods:{
                move:function () {
                    this.$emit("move");
                }
            }
        };
        var config = {
            el:mark,
            data:{
                list:DataManager.readData(),
                book:{},
                message:"123"
            },
            methods:{
                setData:function (info) {
                    var book = new Book(info.title,info.des,info.price);
                    this.list.push(book);
                    DataManager.inserData(this.list);
                },
                addBookToList:function (info) {
                    this.setData(info);
                },
                changeState:function (info) {
                    info.isFull = !info.isFull;
                },
                fun:function () {
                    alert("");
                }
            },
            components:{
                "add-view":componts.addView,
                "list-view":componts.listView,
                "xie-zai-html":ccc
            },
            watch:{
                "list":{
                    handler:function (value) {
                        DataManager.inserData(value);
                    },
                    deep:true
                },
                //监听的是哪一个属性  传过来的 就是哪一个属性的值
                "message":{
                    handler:function (aaa) {
                        console.log(aaa);
                    }
                }
            }
        };
        new Vue(config);
    };

    new App("#app");

})();






