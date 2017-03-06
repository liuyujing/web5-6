/**
 * Created by liuyujing on 2017/3/6.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//class 定义类的关键字
//构造函数 constructor
//const 的值 是不可以被修改的
var HOST = "192.168.100.22";
var REGISTER = "/register";
var Person = (function () {
    function Person(_name) {
        this.name = _name;
        var age = 20;
    }
    //单例模式
    //内存地址  不会发生改的
    Person.type = "人类";
    return Person;
}());
var xiaoMing = new Person("小明");
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(_name) {
        //如果使用了 继承
        //子类 再次重写父类的构造方法  
        //需要使用 super 去调用 父类的构造函数
        _super.call(this, name);
        this.name = _name;
        this.carNum = 111111;
        // this.score = 30;
    }
    return Hero;
}(Person));
var huLuWa = new Hero("葫芦娃");
// huLuWa.carNum = 22222;
//# sourceMappingURL=Class.js.map