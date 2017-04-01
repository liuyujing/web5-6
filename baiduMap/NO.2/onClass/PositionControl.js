/**
 * Created by liuyujing on 2017/3/25.
 */
(function () {

    function PositionControl() {

        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new BMap.Size(50,50);
    }

    //自定义控件 需要继承Control类
    //只要希望 自定义控件 就需要继承Control类
    PositionControl.prototype = new BMap.Control();

    PositionControl.prototype.initialize = function (map) {

        console.log(map);
        var locationButton = document.createElement("button");
        locationButton.textContent = "定位";
        map.getContainer().appendChild(locationButton);

        locationButton.onclick = function () {

        //    定位到 用户当前的位置  并且 把当前位置设置为 用户的中心点

            this.getCurPosition(function (position) {
                if(position.point){
                    map.panTo(position.point);
                }

            });

        }.bind(this);
        
        return locationButton;
    };

    PositionControl.prototype.getCurPosition = function (callback) {

        var geo = new BMap.Geolocation();
        geo.getCurrentPosition(function (result) {
            //获得到result中的point（地理位置） 传递给调用getCurPosition的位置
            console.log(result);

            callback(result);
        });
    };

    window.PositionControl = PositionControl;
})();