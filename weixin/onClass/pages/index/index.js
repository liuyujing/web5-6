//index.js
//获取应用实例

var Move = require("./move").Move;
var m = new Move();

var app = getApp()

var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    info:{
      name:"小明",
      age:6
    },
    loc:{},
    toView: 'red',
    scrollTop: 100,
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
      console.log("onReady");
  },
  onShow:function(){
      console.log("onShow");
  },
  onHide:function(){
      console.log("onHide");
  },
  onShareAppMessage:function(){
      return {
        "title":"最美应用",
        "path":"https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html"
      }
  },
  showAlert:function(){
    m.move();
    this.setData({
      "info.name":"小张"
    })
  },
  getLoc:function(){
    // m.getCurLocation();
    m.getAddress(function(locInfo){
      this.setData({
        loc:locInfo
      })
    }.bind(this));             
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})
