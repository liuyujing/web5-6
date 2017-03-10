/**
 * Created by liuyujing on 2017/3/10.
 */
(function () {

    //可以 数据持久化到 浏览器的 记账本
    //就需要 频繁的 操作 读取 写入的 方法
    //就 封装了  数据操作的类 DataManager

    //读取 写入的操作  没必要 重复创建对象
    //就 写成了  静态方法(类方法) -> 使用 类名去调用

    //-----------------------

    //创建应用的类
    
    //创建两个 让html调用的 读写方法 -> methods中
    //读：DataManager.readData()
    //写：DataManager.insertData(this.bookList);
    
    //不管 读取 还是 写入 数据 都需要 跟 HTML 关联上
    //就需要一个 连接点 数据模型：bookList属性

    //读写 更新的数据  都需要 同步到  bookList


    function app1() {
        new Vue({
            el:"#app",
            data:{
                list:[33,22,44]
            },
            methods:{
                show:function(info){
                    alert(info);
                }
            }
        });
    }

    // 存储 读取 localStroge 中的数据
    class DataManager {

        //插入数据
        static insertData(list){

            window.localStorage.setItem("bookList",list?JSON.stringify(list):"[]");
        };

        //读取数据
        static readData(){

            var dataString = window.localStorage.getItem("bookList");
            console.log(dataString);
            return dataString?JSON.parse(dataString):[];
        };
    }

    //每条记录   的类
    class BookItem {

        constructor(_title,_des,_price){
            this.title = _title;
            this.des = _des;
            this.price = _price;
            //创建 账目 的时间
            this.date = new Date();
            //是否 超出  预计支出
            this.isFull = false;
        }
    }

    //创建应用
    class App {

        constructor(){

            let config = {
                el:"#app",
                data:{
                    
                    //为h了防止 在HTML 中  添加数据  添加不进去 （对象没有初始化）
                    bookInfo:{},
                    //记账的数组
                    bookList:DataManager.readData()
                },
                methods:{
                    setData:function (info) {

                        var bookItem = new BookItem(info.title,info.des,info.price);

                        this.bookList.push(bookItem);
                        DataManager.insertData(this.bookList);
                    },
                    getData:function () {
                        this.bookList = DataManager.readData();
                        return this.bookList;
                    }
                }
            };

            this.vue = new Vue(config);

        }
    }

    new App();

})();