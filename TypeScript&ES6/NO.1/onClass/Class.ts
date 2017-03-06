/**
 * Created by liuyujing on 2017/3/6.
 */


//class 定义类的关键字
//构造函数 constructor

    //const 的值 是不可以被修改的
    const HOST = "192.168.100.22";
    const REGISTER = "/register";


class Person {
    public name:string;
    //受保护的 私有的  只能在本类里面去访问
    //在子类中 也不可访问
    private score:number;

    //只能在 本类 或者 子类中 被访问 
    //不能在 外部被访问
    protected carNum:number;

    //单例模式
    //内存地址  不会发生改的
    static type:string = "人类";

    constructor(_name:string){
        this.name = _name;
        const age:number = 20;
    }
}

var xiaoMing = new Person("小明");


class Hero extends Person {

    message:string;

    constructor(_name:string){
        //如果使用了 继承
        //子类 再次重写父类的构造方法  
        //需要使用 super 去调用 父类的构造函数
        super(name);
        this.name = _name;
        this.carNum = 111111;
        // this.score = 30;
    }
}

var huLuWa = new Hero("葫芦娃");
// huLuWa.carNum = 22222;

