
function Move (){

    this.move = function(){
        console.log("move");
    }
    this.getCurLocation = function(){
        wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function(res){
            // success
            console.log(res);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    this.getAddress = function(callback){
        wx.chooseLocation({
          success: function(res){
            // success
            console.log(res);
            callback(res);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
}

module.exports.Move = Move;