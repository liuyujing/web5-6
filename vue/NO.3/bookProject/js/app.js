/**
 * Created by liuyujing on 2017/3/13.
 */
(function () {

    function App(mark) {
        this.init(mark);
    }
    App.prototype.init = function (mark) {

        var config = {
            el:mark,
            data:{
                list:DataManager.readData(),
                book:{}
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
                }
            },
            components:{
                "add-view":componts.addView,
                "list-view":componts.listView
            },
            watch:{
                "list":{
                    handler:function (value) {
                        DataManager.inserData(value);
                    },
                    deep:true
                }
            }
        };
        new Vue(config);
    };

    new App("#app");

})();