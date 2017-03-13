/**
 * Created by liuyujing on 2017/3/13.
 */

class Book {
    constructor(_title,_des,_price){
        this.title = _title;
        this.des = _des;
        this.date = new Date();
        this.price = _price;
        this.isFull = true;
    }
}