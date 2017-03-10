/**
 * Created by liuyujing on 2017/3/10.
 */


class DataManager {
    static setData(list){
        window.localStorage.setItem("bookData",list);
    };
    static getData(){
        return window.localStorage.getItem("bookData").split(",")||[];
    };
}