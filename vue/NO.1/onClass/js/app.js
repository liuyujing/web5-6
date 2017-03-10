/**
 * Created by liuyujing on 2017/3/9.
 */
(function () {

    var config = {
        el:"#container",
        data:{
            person:{
                name:"小明",
                age:10
            },
            student:{
                name:"小猫",
                age:11
            },
            infoHTML:"<ul><li>很好</li></ul>",
            message:"默认值",
            persons:[
                {name:"小明",age:10},
                {name:"小猫",age:14},
                {name:"小白",age:11},
                {name:"小猪",age:16}
            ],
            list:[
                {
                    code:200,
                    message:"成功",
                    data:[
                        {name:"小明",age:10},
                        {name:"小猫",age:14},
                        {name:"小白",age:11},
                        {name:"小猪",age:16}
                    ]
                },
                {
                    code:200,
                    message:"成功",
                    data:[
                        {name:"小明1",age:10},
                        {name:"小猫1",age:14},
                        {name:"小白2",age:11},
                        {name:"小猪3",age:16}
                    ]
                }
            ]
        }
    };

    new Vue(config);

})();