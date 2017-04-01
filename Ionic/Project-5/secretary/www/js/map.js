/**
 * Created by liuyujing on 2017/4/1.
 */
(function () {

  window.onload = function () {

    /*
    * 创建地图的类
    * _mark 地图容器 id类型的选择器名字
    * _point 经纬度对象{lng:1111,lat:1111}
    * _zoom 初始的缩放比例
    * isShowPoint 是否显示 _point 的位置
    * */
    function Map(_mark,_point,_zoom,isShowPoint) {

      this.map = new BMap.Map(_mark);
      var point = new BMap.Point(_point.lng,_point.lat);
      this.map.centerAndZoom(point,_zoom);


      if(isShowPoint){
        this.movePromise = this.showMarker(point);
      }

    }

    //创建大头针的方法
    Map.prototype.showMarker = function (point) {

      return new Promise(function (res) {

        var marker = new BMap.Marker(point);
        marker.enableDragging();
        this.map.addOverlay(marker);

        marker.addEventListener("dragend",function (event) {
          console.log(event.point);
          res(event.point);
        });

      }.bind(this))

    };

    window.Map = Map;

  }
})();
