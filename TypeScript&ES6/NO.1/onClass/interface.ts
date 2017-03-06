/**
 * Created by liuyujing on 2017/3/6.
 */

// function Person (){
//     this.name;
//     this.age;
//     this.score;
// }

interface Person {
    name:string,
    age:number,
    score:number
}

//继承
interface Hero extends Person{
    weapon:string
}

//协议：很多类 都遵守的一个 公共条约

interface PersonProtocol {
    name:string,
    age:number,
    class()
}



