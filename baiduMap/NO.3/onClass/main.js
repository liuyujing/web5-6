/**
 * Created by liuyujing on 2017/3/27.
 */
(function () {


    function Map(_idString) {

        this.bMap = new BMap.Map(_idString);
        this.bMap.centerAndZoom("北京",10);

    }

    Map.prototype.searchDriving = function (begin,end) {
        var driveRoute = new BMap.DrivingRoute(this.bMap,{
            //renderOptions：内容呈现的选项
            renderOptions:{
                map:this.bMap,
                autoViewport: true,
                panel:"resultContainer"
            },

            // 驾车的策略
            policy:BMAP_DRIVING_POLICY_LEAST_TIME
        });

        driveRoute.search(begin,end);

    };
    
    //创建 Map 对象
    var map = new Map("map");

    document.querySelector("#search").onclick = function () {

        var beginString = document.querySelector("#startPoint").value;
        var endString = document.querySelector("#endPoint").value;

        console.log(beginString,endString);
        map.searchDriving(beginString,endString);
    }


})();