/**
 * Created by liuyujing on 2017/3/13.
 */

(()=>{

    class App {

        constructor(mark){

            var config = {
                el:mark,
                components:{
                    "book-list":listView,
                    "add-book":addBook
                },
                data:{
                    list:DataManager.readData(),
                    book:{}
                },
                methods: {
                    setData: function (info) {
                            var book = new Book(info.title, info.des, info.price);
                        this.list.push(book);
                        DataManager.insertData(this.list);
                    },
                    getData: function () {

                        this.list = DataManager.readData();
                        return this.list;
                    },
                    addBookToList: function (book) {
                        this.setData(book);
                    },
                    changeState:function (info) {
                        info.isFull = !info.isFull;
                    }
                },
                watch:{
                    "list":{
                        handler:function (value) {
                            DataManager.insertData(value);
                        },
                        deep:true
                    }
                }
            };

            var vue = new Vue(config);


        }
    }

    new App("#app");

})();