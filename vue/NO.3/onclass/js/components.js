/**
 * Created by liuyujing on 2017/3/13.
 */

var listView = {

    template:"<ul><li v-for='item in datas' :class='{choose:item.isFull}'><p v-text='item.title' @click='change(item)'></p><p v-text='item.des'></p></li></ul>",
    props:["datas"],
    methods:{
        change:function (info) {
            this.$emit("change",info);
        }
    }

};

var addBook = {
    template:"<div><p><label for='title-input'>标题</label><input id='title-input' type='text' placeholder='请输入标题' v-model='book.title'></p><p><label for='price-input'>价格</label><input id='price-input' type='number' v-model='book.price'></p><p><label for='des-input'>内容</label><input id='des-input' type='text' placeholder='请输入内容' v-model='book.des'></p><button @click='add(book)'>添加</button></div>",
    props:["book"],
    methods:{
        add:function (info) {
            this.$emit("add",info);
        }
    }

};
