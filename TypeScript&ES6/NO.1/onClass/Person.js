/**
 * Created by liuyujing on 2017/3/6.
 */
(function () {

    function Person(_name,_age) {

        this.name = _name;
        this.age = _age;
    }

    Person.prototype.action = function () {
      console.log(""+this.name+""+this.age+"岁 XXXXX");
    };

    
    function Hero() {
        Person.apply(this,arguments);
    }

    // function Hero(_name,_age) {
    //     Person.call(this,_name,_age);
    // }

    Hero.prototype = new Person();

    var xiaoMing = new Hero("小明",8);
    xiaoMing.action();



})();