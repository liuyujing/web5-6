/**
 * Created by liuyujing on 2017/3/25.
 */
(function () {

    var map = new BMap.Map("map",{enableHighResolution:false});
    map.centerAndZoom("北京",15);

    var positionButton = new PositionControl();
    map.addControl(positionButton);

})();