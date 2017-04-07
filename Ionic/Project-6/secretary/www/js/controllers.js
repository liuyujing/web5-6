angular.module("starter.controllers",[])

  //分栏控制器
  .controller("tabController",function (DBManager) {

    //打开数据库
    DBManager.openDB("recoders",1.0);

    DBManager.createTable("CREATE TABLE recoder ('title' varchar(255) NOT NULL,'des' NOT NULL,'alert_time','status','is_public','lat','lng','address','date','is_online','is_finish');").then(function (result) {
      console.log(result);
    }).catch(function (error) {
      console.log(error);
    });

  })

  //首页的控制器
  .controller("recoderController",function ($scope,DBManager,$ionicLoading,$timeout,timeTool,$ionicListDelegate,$rootScope) {

    function loadData() {

      //等待视图
      $ionicLoading.show({
        template: '正在努力加载中...'
      });

      // $scope.recorders = [];
      //所有的控制器 都可以访问 recoderList 这个变量了
      $rootScope.recoderList = [];
      $scope.recorders = $rootScope.recoderList;
      DBManager.searchData("SELECT * FROM recoder").then(function (result) {

        //传递到视图
        $scope.$apply(function () {

          for (var i =0; i<result.data.length;i++){
            var timeStamp = result.data[i].alert_time;

            $scope.recorders.push(result.data[i]);
            if ($scope.recorders[i].alert_time){
              $scope.recorders[i].alert_time = timeTool.amOrPm(timeStamp);
            }

          }

          $ionicLoading.hide();

          $scope.$broadcast('scroll.refreshComplete');
          // $scope.recorders = result.data;

          console.log($scope.recorders);

        });

      }).catch(function (error) {

        $ionicLoading.hide();

        //  如果加载失败 提示错误信息
        $ionicLoading.show({
          template: error.message
        });
        $timeout(function () {
          $ionicLoading.hide();
        },2000);

      });
    }

    loadData();

    $scope.reload = function () {

      loadData();

    }

    $scope.deleteItem = function (info) {
      $ionicLoading.show({
        template:"正在删除中..."
      });

      DBManager.deleteData("DELETE FROM recoder WHERE date="+info.date).then(function (result) {

        $ionicListDelegate.closeOptionButtons();
        $ionicLoading.hide();

          //获得到 要删除 元素的下标
          var deleteIndex = $scope.recorders.indexOf(info);
          //在数组中删除 并且在数据库中删除
          $scope.recorders.splice(deleteIndex,1);

      }).catch(function (error) {
        $ionicLoading.show({
          template:error.message
        });

        $timeout(function () {
          $ionicLoading.hide();
        },2000);
      });
    };

  })

//  录入数据页面控制器
//  $ionicActionSheet 底下弹出来的 弹出框
//  $ionicPopup 弹出框
//  $ionicHistory
.controller("RecoderWriteController",function ($scope,writeService,$ionicActionSheet,$ionicPopup,DBManager,$ionicHistory,$stateParams,$rootScope) {

  console.log($rootScope.recoderList);

  console.log($stateParams);

  //根据 type 在视图上面 去区分  进入的 是哪一种 界面
  $scope.type = $stateParams.type;

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
      public:{
        message:"私有",
        isPublic:false
      },
      location:{
        address:"定位",
        point:{}
      }
    };


    //如果进入详情页面
    if ($scope.type !== "001"){

      //获取传过来的内容
      var info = $rootScope.recoderList[parseInt($stateParams.type)];

      $scope.writeInfo.title = info.title;
      $scope.writeInfo.des = info.des;
      $scope.writeInfo.alertTime = info.alert_time;
      $scope.writeInfo.status = writeService.status(info.status-1);

      var isPub = info.is_public=="true"?true:false;
      $scope.writeInfo.public = {
        message:isPub?"公开":"私有",
        isPublic:isPub
      };
      $scope.writeInfo.location = {
        address:info.address,
        point:{
          lat:info.lat,
          lng:info.lng
        }
      };

      console.log($scope.writeInfo.public.isPublic);

      //显示地图
      // var map = new BMap.Map("showLoctaionMapView");
      // var point = new BMap.Point(info.lng,info.lat);
      // map.centerAndZoom(point,14);

      var map = new Map("showLoctaionMapView",$scope.writeInfo.location.point,15,true);
      map.movePromise.then(function (point) {
       console.log("controller:",point);
        $scope.writeInfo.location.point = {
          lat:point.lat,
          lng:point.lng
        }
      });

    }

  /*
   * addEvent 给录入页面  按钮添加统一事件
   * 0 提醒时间
   * 1 状态
   * 2 定位
   * 3 是否公开
   * */
    $scope.addEvent = function (type,info) {

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
        this.writeInfo.public.message = this.writeInfo.public.isPublic?"公开":"私有";
        break;
      default:
    }
  };

    //保存到本地
    function saveForOffline(info) {


      console.log("...",info);
      // INSERT INTO recoder ('title','des') VALUES ('1234','wertyu');
      var date = new Date();

      var funName = ($scope.type=="001")?DBManager.addData:DBManager.updateData;

      var addSql = "INSERT INTO recoder ('title','des','alert_time','status','is_public','lat','lng','address','date') VALUES(?,?,?,?,?,?,?,?,?);";
      var updateSql = "UPDATE recoder SET title=?,des=?,alert_time=?,status=?,is_public=?,lat=?,lng=?,address=? WHERE date=?";

      var sql = $scope.type=="001"?addSql:updateSql;

      funName(sql,[info.title,info.des,info.alertTime,info.status.statusNum,info.public.isPublic,info.location.point.lat,info.location.point.lng,info.location.address,$scope.type=="001"?date.getTime():$rootScope.recoderList[parseInt($stateParams.type)].date]).then(function (result) {
        console.log("addOrUpdate",result);
      }).catch(function (error) {
        console.log(error);
      });

    }

    //保存到云端
    function saveForOnine(info) {
      alert("云端");
      // todo: 判断是否登录

      //保存到云端的时候  同时保存一份到本地
      saveForOffline(info);
    }

    $scope.toSave = function (info) {

      if (this.writeInfo.title.length>0&&this.writeInfo.des.length>0){

        $ionicActionSheet.show({
          buttons: [
            { text: '保存到本地',type:"energized"},
            { text: '保存到云端'},
          ],
          titleText: '保存记录',
          cancelText: '取消',
          buttonClicked: function(index) {
              console.log(index);

              index?saveForOnine(info):saveForOffline(info);

            $ionicHistory.goBack();
            return true;
          }
        });


      }else {
      //  未录入标题或者内容
        $ionicPopup.alert({
          title: '温馨提示',
          template: '请填写标题、内容',
          buttons:[{
            text:"OK",
            type:"button-energized"
          }]
        });
      }

    //  保存到本地 或者 云端
    //  使用alertSheet

    }

})

.controller("settingController",function ($scope,HTTPManager) {

  $scope.gotoRegister = function () {
    HTTPManager.post(HOST+REGISTER,{name:"xiaoming"});
  };

});
