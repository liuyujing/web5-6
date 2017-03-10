/**
 * Created by liuyujing on 2017/3/9.
 */
(function () {

    var list = [{
        type: "emotion",
        data: [
            {
                title: "好好好",
                des: "没有bug",
                date: "2017-3-6 8:00"
            },
            {
                title: "好好好1",
                des: "没有bug1",
                date: "2017-3-6 8:00"
            },
            {
                title: "好好好2",
                des: "没有bug2",
                date: "2017-3-6 8:00"
            }
        ]
    },
        {
        type: "work",
        data: [
            {
                title: "努力努力",
                des: "熬夜到凌晨",
                date: "2017-3-6 8:00"
            }, {
                title: "努力努力1",
                des: "熬夜到凌晨1",
                date: "2017-3-6 8:00"
            }, {
                title: "努力努力2",
                des: "熬夜到凌晨2",
                date: "2017-3-6 8:00"
            }
        ]
    }, {
        type: "hobby",
        data: [
            {
                title: "唱唱歌",
                des: "幻想不难听",
                date: "2017-3-6 8:00"
            }, {
                title: "唱唱歌1",
                des: "幻想不难听1",
                date: "2017-3-6 8:00"
            }, {
                title: "唱唱歌2",
                des: "幻想不难听2",
                date: "2017-3-6 8:00"
            }
        ]
    }];


    new Vue({
        el:"#app",
        data:{
            list:list
        }
    });

})();