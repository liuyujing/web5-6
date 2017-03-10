/**
 * Created by liuyujing on 2017/3/7.
 */

//只用 数据模型
//协议

//接口 就是一个协议
//只要遵守了这个 协议 就必须按照协议里面的规则  去落实
//没有添加 问号的 都是 强制实现的
interface PersonInterface {
    name:string,
    age?:number
}


//接口不可实例化对象

// var xiaoMing:PersonInterface;
// xiaoMing.name = "小明";


/*
* 类：是对 对象的抽象  眼睛 嘴巴 说话 -> 人类(特征)
* 对象：黄琪勇 -> 具体的特征
* */

//让类 实现 接口
//Person 类 去实现接口PersonInterface
//Person 就必须 按照 PersonInterface 指定的规则去实现
class Person implements PersonInterface {

    //静态属性 内存一直在同一个位置
    static type = "人类";

    name:string;
    eyes:string;
    nose:string;

    static move(){
        console.log("静态方法");
    }

    speak(message:string){

        //支持换行
        //变量 使用 ${}
        console.log(`说话 
        
${message}`);

    };


    run(callback){
        callback("奔跑吧");
    }

    constructor(){
    }
}

//需要使用 类名 去访问
console.log(Person.type);
Person.move();

var xiaoMing = new Person();
xiaoMing.name = "小明";
xiaoMing.eyes = "独眼";
xiaoMing.speak("你好");
xiaoMing.run((data)=>{
    console.log(data);
});


class Student implements PersonInterface {
    name:string;
    constructor(){

    }
}

var xiaoHong = new Person();
xiaoHong.name = "xiaoming";


//接口的继承
interface MonsterInterface extends PersonInterface{

}

class Monster implements MonsterInterface {

    name:string;

    constructor(){}
}

var xiaoMao = new Monster();
xiaoMao.name = "xiaomao";

class Hero extends Person {

}

var xiaoZhang = new Hero();
xiaoZhang.name = "小张";
console.log(xiaoZhang.name);




class Animal {
    //花括号内 表示 类的内部
    public type:string;
    //私有的  只能 自己 并且是 类的内部访问到
    private color:string;
    //只能在  本类 或者 子类 内部访问到  外部访问不到
    protected name:string;

    constructor(){}
}

class Dog extends Animal {
    run(){
        console.log(`${this.name} 跑啊跑啊~`);
    }
}

//类的花括号外面 就是 外部

var xiaomao = new Animal();
xiaomao.type = "花猫";

var xiaogou = new Dog();
// xiaogou.na

// 基类 - 抽象类
//abstract 声明的 类 是 基类（抽象类） 不可以直接实例化
//如果需要使用  创建他的子类 才可以实例化
abstract class Chong {
    name:string;
    run(){
        console.log("run~");
    };
}


// var xiaoChong = new Chong();

class Long extends Chong {

    constructor(){
        super();
    }
}

var long = new Long();
long.name = "小龙";
console.log(long.name);

//宏定义：宏观 定义的变量
//常量 定义 后面不能改的值
const HOST = "192.168.1.1";
// HOST = "";

// var name = "";


for (var i=0;i<10;i++){
    // let 定义的变量  只能在  定义位置的花括号 内使用
    //    使用完之后  就会被销毁
    console.log(i);
}
console.log("result"+i);

