/**
 * Created by liuyujing on 2017/3/15.
 */
(function () {

    window.addPerson = {
        template:"<div><input type='text' v-model='user.name'><button @click='add(user)'>添加</button><ul><li v-for='item in curlist' v-text='item.name'></li></ul></div>",
        props:["user","curlist"],
        methods:{
            add:function (info) {
                this.$emit("add",info);
            }
        }
    };

    Vue.component("add-person",addPerson);
})();