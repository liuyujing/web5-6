angular.module("starter.controllers",[])

.controller("RecoderWriteController",function ($scope,writeService) {

  /*
  * writeInfo 记录 录入数据 的数据模型
   * title 标题
   * des 内容
   * alertTime 提醒时间 精确到毫秒的时间戳
   * status 紧急状态 0非常紧急  1普通  2不紧急
   * isPublic 是否公开
   * location 定位  lat lng经纬度的值 address
  * */
    $scope.writeInfo = {
      title:"",
      des:"",
      alertTime:0,
      status:{
        message:"普通事件",
        statusNum:1
      },
      publicSet:{
        message:"私有",
        isPublic:false
      },
      location:{}
    };

  /*
   * addEvent 给录入页面  按钮添加统一事件
   * 0 提醒时间
   * 1 状态
   * 2 定位
   * */
  $scope.addEvent = function (type) {

    console.log(type);

    switch (type){
      case 0:
        this.writeInfo.alertTime = writeService.alertTime();
        break;
      case 1:
          this.writeInfo.status = writeService.status(this.writeInfo.status.statusNum);
        break;
      case 2:
        writeService.getCurLocation().then(function (info) {
          // $scope.writeInfo.location = info;

          $scope.$apply(function () {
            $scope.writeInfo.location = info;
          });
        });
        break;
      case 3:

        $scope.writeInfo.publicSet.message = $scope.writeInfo.publicSet.isPublic==true?"公开":"私有";
        console.log($scope.writeInfo.publicSet);
        break;
      default:
    }

  };

    $scope.toSave = function () {

      if (this.writeInfo.title.length>0&&this.writeInfo.des.length>0){

      }else {
      //  未录入标题或者内容
      }

    //  保存到本地 或者 云端
    //  使用alertSheet

    }

});


