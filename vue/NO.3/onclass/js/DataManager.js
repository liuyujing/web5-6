/**
 * Created by liuyujing on 2017/3/13.
 */

class DataManager {

    static insertData(list){

        window.localStorage.setItem("bookList",list?JSON.stringify(list):"[]");

    };

    static readData(){
        var list = window.localStorage.getItem("bookList");
        return list?JSON.parse(list):[];
    };
}