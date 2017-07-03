"use strict";
/**
 * Created by liuyujing on 2017/5/2.
 */
var age = false;
function giveMe() {
    console.log("111");
}
function sum(a, b) {
    return a + b;
}
function mm() {
    var a = 30;
    var b = 40;
}
// if (1){
//     let aa = 20;
//     var bb = 30;
//     console.log(aa,bb);
// }
// console.log(aa,bb);
var xiaoMing = "112";
var _a = [1, 2, 3, 4, 5,], first = _a[0], last = _a.slice(1);
console.log(first);
console.log(last);
function tt(_a) {
    var a = _a[0], b = _a[1];
    console.log(a, b);
}
tt(["1", 22]);
var obj = {
    name: "xiaoming",
    age: 20
};
var name = obj.name;
console.log(name);
function sss(a, b) {
    if (b === void 0) { b = 30; }
    console.log(a, b);
}
sss(22, 2);
function aaa(a, b) { }
aaa("11");
aaa("22", "33");
function pay() {
    var _this = this;
    return function () {
        console.log(_this);
    };
}
pay()();
function vvv(a, b) {
}
// vvv("aa");
var pp = {
    names: [111, 222, 333],
    move: function () {
        // console.log("...",this.names[0]);
    }
};
pp.move();
function fff(a) {
    console.log(a);
}
fff(1);
fff("2");
function cc(a) {
    console.log(a);
}
cc(11);
cc("22");
var oUL = document.getElementById("ulItems");
var items = "";
for (var i = 0; i < 10; i++) {
    items += "<li>item" + i + "</li>";
}
oUL.innerHTML = items;
function unqie(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if (result.indexOf(list[i]) === -1) {
            result.push(list[i]);
        }
    }
    return result;
}
var P = require("./Person");
var pp123 = new P.Person("xiaoming");
pp123.move();
//# sourceMappingURL=app.js.map