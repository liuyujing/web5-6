/**
 * Created by liuyujing on 2017/3/9.
 */
(function () {

    new Vue({
        el:"#container",
        data:{
            isBoy:true,
            type:"5",
            isShow:true,
            colorOfKinds:"color-type",
            imagePath:"https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            list:[{name:"小明",age:20},{name:"小张",age:10},{name:"小红",age:40}]
        },
        methods:{
            waring:function () {
                // alert(this.colorOfKinds);
                alert("")
            },
            showMessage:function (info) {
                alert(info.name+info.age);
            }
        }
    });

})();

//记账本 把数据存到 localStroge 里面
