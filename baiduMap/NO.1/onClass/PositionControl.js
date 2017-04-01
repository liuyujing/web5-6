/**
 * Created by liuyujing on 2017/3/24.
 */


(function () {

    function PositionControl(_map) {

        //地图对象
        this.map = _map;

    //✭✭✭✭✭ 需要初始化 控件的默认位置 和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new BMap.Size(50,50);
    }

    //✭✭✭✭✭ 自定控件 必须 继承Control类
    PositionControl.prototype = new BMap.Control();

    //✭✭✭✭✭ 调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素
    PositionControl.prototype.initialize = function () {

        var button = document.createElement("button");
        button.textContent = "定位";

        this.map.getContainer().appendChild(button);

        return button;
    };

    window.PositionControl = PositionControl;
})();