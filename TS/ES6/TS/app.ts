/**
 * Created by liuyujing on 2017/5/2.
 */
let age:boolean = false;
function giveMe ():void {
    console.log("111");
}

function sum (a:number,b:number) : number {
    return a+b;
}

function mm ():void {
    var a = 30;
    let b = 40;
}

// if (1){
//     let aa = 20;
//     var bb = 30;
//     console.log(aa,bb);
// }
// console.log(aa,bb);

const xiaoMing:string = "112";

let [first,...last] = [1, 2,3,4,5,];
console.log(first);
console.log(last);

function tt([a,b]:[string,number]):void{
    console.log(a,b);
}

tt(["1",22]);

var obj = {
    name:"xiaoming",
    age:20
};

var {name} = obj;
console.log(name);


function sss (a:number,b=30):void{
 console.log(a,b);
}

sss(22,2);

function aaa (a:string,b?:string):void{}

aaa("11");

aaa("22","33");


function pay(){

    return ()=>{
        console.log(this);
    };
}


pay()();

function vvv(a:string,b:string):void{

}

// vvv("aa");


var pp = {
    names:[111,222,333],
    move:()=>{
        // console.log("...",this.names[0]);
    }
};

pp.move();


function fff<T>(a:T):void{
    console.log(a);
}

fff(1);
fff("2");


function cc (a:string|number):void{
    console.log(a);
}

cc(11);
cc("22");


var  oUL = document.getElementById("ulItems");
var items = "";
for (var i=0;i<10;i++){
    items += "<li>item"+i+"</li>"
}
oUL.innerHTML = items;



function unqie(list){
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if (result.indexOf(list[i]) === -1) {
            result.push(list[i]);
        }
    }
    return result;
}

import P = require("./Person");

var pp123 = new P.Person("xiaoming");
pp123.move();

