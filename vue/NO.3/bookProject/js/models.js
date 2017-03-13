/**
 * Created by liuyujing on 2017/3/13.
 */
(function () {

    function Book(_title,_des,_price) {
        this.title = _title;
        this.des = _des;
        this.price = _price;
        this.date = new Date();
        this.isFull = false;
    }

    window.Book = Book;
})();