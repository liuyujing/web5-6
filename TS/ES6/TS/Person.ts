/**
 * Created by liuyujing on 2017/5/2.
 */
class Person {
    name:string;
    constructor(name){
        this.name = name;
    };
    move():void{
        console.log(this.name);
    }
}

export = {Person}
