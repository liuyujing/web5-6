/**
 * Created by liuyujing on 2017/3/15.
 */
(function () {

    //创建App类 用于创建Vue
    function App(_mark) {

        this.mark = _mark;

        this.init();
    }

    //初始化的函数
    App.prototype.init = function () {
        var config = {
            el:this.mark,
            data:{
                //初始化 用户模型  用于接收 login组件中的数据
                user:{},
                personmodel:{},
                result:{},
                //读取保存在 浏览器中的 原始数据
                persons:DataManager.readData("persons")||[],
                //读取保存在 浏览器中  正在使用的数据
                curPersons:DataManager.readData("curPersons")||[]
            },
            methods:{
                //用于登录的函数
                login:function (userInfo) {
                    this.user = userInfo;
                    //把用户名当做key
                    DataManager.insertData(userInfo.username,userInfo);

                },
                start:function () {

                    //如果抽选完毕 重置当前使用的数组的值
                    this.curPersons = this.curPersons.length==0?DataManager.readData("persons"):this.curPersons;

                    console.log("geshu:",this.persons);
                    var maxNum = this.curPersons.length;
                    //在抽选的数组 范围内  随机一个数字
                    var randNum = parseInt((Math.random()*10000)%maxNum);

                    //把随机出来的 结果 赋值给result
                    this.result = this.curPersons[randNum];
                //    移除 随机出来的这个人
                    this.curPersons.splice(randNum,1);
                    console.log("weizhi:",randNum);
                    DataManager.insertData("curPersons",this.curPersons);
                },
                addPerson:function (info) {
                //    1:老师
                //    2:学生

                //    1.添加到原始数据
                //    2.添加到正在使用的数据里面


                    if (!this.user.name){
                        alert("未登录");
                        return;
                    }

                    if (this.user.type!=1){
                        alert("没有权限");
                        return;
                    }

                    console.log("bbb",info);
                    var userInfo = new models.User(info.name);
                    this.persons.push(userInfo);
                    this.curPersons.push(userInfo);

                    DataManager.insertData("persons",this.persons);
                    DataManager.insertData("curPersons",this.curPersons);

                }
            }
            // router:router
        };

        this.vue = new Vue(config);
    };

    //创建 App对象
    var app = new App("#app");

})();