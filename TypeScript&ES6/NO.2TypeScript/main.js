/**
 * Created by liuyujing on 2017/3/7.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Person = (function () {
    function Person() {
    }
    Person.move = function () {
        console.log("静态方法");
    };
    Person.prototype.speak = function (message) {
        //支持换行
        //变量 使用 ${}
        console.log("\u8BF4\u8BDD \n        \n" + message);
    };
    ;
    Person.prototype.run = function (callback) {
        callback("奔跑吧");
    };
    //静态属性 内存一直在同一个位置
    Person.type = "人类";
    return Person;
}());
//需要使用 类名 去访问
console.log(Person.type);
Person.move();
var xiaoMing = new Person();
xiaoMing.name = "小明";
xiaoMing.eyes = "独眼";
xiaoMing.speak("你好");
xiaoMing.run(function (data) {
    console.log(data);
});
var Student = (function () {
    function Student() {
    }
    return Student;
}());
var xiaoHong = new Person();
xiaoHong.name = "xiaoming";
var Monster = (function () {
    function Monster() {
    }
    return Monster;
}());
var xiaoMao = new Monster();
xiaoMao.name = "xiaomao";
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        _super.apply(this, arguments);
    }
    return Hero;
}(Person));
var xiaoZhang = new Hero();
xiaoZhang.name = "小张";
console.log(xiaoZhang.name);
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.run = function () {
        console.log(this.name + " \u8DD1\u554A\u8DD1\u554A~");
    };
    return Dog;
}(Animal));
//类的花括号外面 就是 外部
var xiaomao = new Animal();
xiaomao.type = "花猫";
var xiaogou = new Dog();
// xiaogou.na
// 基类 - 抽象类
//abstract 声明的 类 是 基类（抽象类） 不可以直接实例化
//如果需要使用  创建他的子类 才可以实例化
var Chong = (function () {
    function Chong() {
    }
    Chong.prototype.run = function () {
        console.log("run~");
    };
    ;
    return Chong;
}());
// var xiaoChong = new Chong();
var Long = (function (_super) {
    __extends(Long, _super);
    function Long() {
        _super.call(this);
    }
    return Long;
}(Chong));
var long = new Long();
long.name = "小龙";
console.log(long.name);
//宏定义：宏观 定义的变量
//常量 定义 后面不能改的值
var HOST = "192.168.1.1";
// HOST = "";
// var name = "";
for (var i = 0; i < 10; i++) {
    // let 定义的变量  只能在  定义位置的花括号 内使用
    //    使用完之后  就会被销毁
    console.log(i);
}
console.log("result" + i);
//# sourceMappingURL=main.js.map