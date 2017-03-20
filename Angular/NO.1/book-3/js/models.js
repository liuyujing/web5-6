/**
 * Created by liuyujing on 2017/3/20.
 */
(function () {

    //定义一个 book 的数据模型
    //每次再添加 book对象的时候 就创建一个 新的 对象
    //解决 添加完内容之后  所有内容 都是变成相同的内容
    function Book(_title,_price) {
        this.title = _title;
        this.price =  _price;
    }

    window.Book = Book;

})();