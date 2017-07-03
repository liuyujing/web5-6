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
  .controller("recoderController",function ($scope,DBManager,$ionicLoading,$timeout,timeTool,$ionicListDelegate,$rootScope,HTTPManager) {

    function loadData() {

      //等待视图
      $ionicLoading.show({
        template: '正在努力加载中...'
      });

      // $scope.recorders = [];
      //所有的控制器 都可以访问 recoderList 这个变量了
      $rootScope.recoderList = [];
      $scope.recorders = $rootScope.recoderList;

      HTTPManager.get(HOST+SEARCH_RECODER,{user_id:window.localStorage.getItem(USER_ID)}).then(function (result) {

        console.log(result);

        if (result.data.code==2000){
          //todo:
          $scope.recorders = result.data.data;
          $rootScope.recoderList = $scope.recorders;
            $ionicLoading.hide();

            $scope.$broadcast('scroll.refreshComplete');

        }

      }).catch(function (error) {
          //todo:
          console.log(error);
      });

      // DBManager.searchData("SELECT * FROM recoder").then(function (result) {
      //
      //   //传递到视图
      //   $scope.$apply(function () {
      //
      //     for (var i =0; i<result.data.length;i++){
      //       var timeStamp = result.data[i].alert_time;
      //
      //       $scope.recorders.push(result.data[i]);
      //       if ($scope.recorders[i].alert_time){
      //         $scope.recorders[i].alert_time = timeTool.amOrPm(timeStamp);
      //       }
      //
      //     }
      //
      //     $ionicLoading.hide();
      //
      //     $scope.$broadcast('scroll.refreshComplete');
      //     // $scope.recorders = result.data;
      //
      //     console.log($scope.recorders);
      //
      //   });
      //
      // }).catch(function (error) {
      //
      //   $ionicLoading.hide();
      //
      //   //  如果加载失败 提示错误信息
      //   $ionicLoading.show({
      //     template: error.message
      //   });
      //   $timeout(function () {
      //     $ionicLoading.hide();
      //   },2000);
      //
      // });

    }

    loadData();

    $scope.reload = function () {

      loadData();

    };

    $scope.deleteItem = function (info) {
      $ionicLoading.show({
        template:"正在删除中..."
      });

      HTTPManager.get(HOST+DELETE_RECODER,{recoderID:info.recoder_id}).then(function (result) {

        if (result.data.code==2000){
          $ionicLoading.hide();
          $scope.recorders.splice($scope.recorders.indexOf(info),1);
        }

      }).catch(function (error) {
        $ionicLoading.show({
          template:error.message
        });

        $timeout(function () {
          $ionicLoading.hide();
        },2000);
      });

      // DBManager.deleteData("DELETE FROM recoder WHERE date="+info.date).then(function (result) {
      //
      //   $ionicListDelegate.closeOptionButtons();
      //   $ionicLoading.hide();
      //
      //     //获得到 要删除 元素的下标
      //     var deleteIndex = $scope.recorders.indexOf(info);
      //     //在数组中删除 并且在数据库中删除
      //     $scope.recorders.splice(deleteIndex,1);
      //
      // }).catch(function (error) {
      //   $ionicLoading.show({
      //     template:error.message
      //   });
      //
      //   $timeout(function () {
      //     $ionicLoading.hide();
      //   },2000);
      // });
    };

  })

//  录入数据页面控制器
//  $ionicActionSheet 底下弹出来的 弹出框
//  $ionicPopup 弹出框
//  $ionicHistory
.controller("RecoderWriteController",function ($scope,writeService,$ionicActionSheet,$ionicPopup,DBManager,$ionicHistory,$stateParams,$rootScope,alertView,HTTPManager) {

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

      if (!window.localStorage.getItem(IS_LOGIN)){

        alertView.showMessageForDelay("请登录后保存",2000);

        return;
      }

      //录入的数据中 没有用户ID  需要把登录时候的ID添加到这个对象中

      $scope.writeInfo.userID = parseInt(window.localStorage.getItem(USER_ID));

      HTTPManager.post(HOST+ADD_RECODER,$scope.writeInfo).then(function (result) {

        result.data.code==2000?$ionicHistory.goBack():alertView.showMessageForDelay(result.data.message,2000);

      }).catch(function (error) {
        alertView.showMessageForDelay(error.data.message,2000);
      });

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

.controller("settingController",function ($scope,HTTPManager,$rootScope) {

  // $scope.gotoRegister = function () {
  //   HTTPManager.post(HOST+REGISTER,{name:"xiaoming"});
  // };

  //读取用户的登录状态
  $rootScope.isLogin = window.localStorage.getItem(IS_LOGIN);

  //如果登录了 显示用户名
  if($rootScope.isLogin){
    $rootScope.username = window.localStorage.getItem(USER_NAME);
  }

})

  .controller("loginController",function ($scope,alertView,HTTPManager,$ionicHistory,$rootScope) {

    $scope.userInfo = {};

    var reg = /^1[3-8]\d{9}$/;

    function login() {

      $scope.userInfo.password = md5(sha1($scope.userInfo.password+"secretary"));

      HTTPManager.post(HOST+LOGIN,$scope.userInfo).then(function (result) {
        console.log("登录",result);
        if (result.data.code==2000){

        //  保存登录状态
        //  保存用户名 到本地
          window.localStorage.setItem(IS_LOGIN,1);

          window.localStorage.setItem(USER_NAME,result.data.data.username);
          window.localStorage.setItem(USER_ID,result.data.data.user_id);

          //更新登录状态
          $rootScope.isLogin = window.localStorage.getItem(IS_LOGIN);
          $rootScope.username = window.localStorage.getItem(USER_NAME);

          $ionicHistory.goBack();
        }else {
          alertView.showMessageForDelay(result.data.message,2000);
        }

      }).catch(function (error) {
        alertView.showMessageForDelay(error.data.message,2000);
      });
    }
    $scope.toLogin = function () {

      reg.test($scope.userInfo.phone)?login():alertView.showMessageForDelay("请输入正确的手机号",2000);

    };

  })

  .controller("registerController",function ($scope,$interval,HTTPManager,$ionicLoading,$timeout,alertView,$ionicHistory) {

    $scope.registerInfo = {};

    $scope.codeStatus = "获取验证码";

    //是否禁用 获取验证码按钮
    $scope.codeStatusIsDisable = false;

    $scope.isFinish = false;

    $scope.getVerfilyCode = function () {

      var reg = /^1[3-8]\d{9}$/;
      if (!reg.test($scope.registerInfo.phone)){

        alertView.showMessageForDelay("您输入的不是手机号码",2000);

        return;
      }

      HTTPManager.get(HOST+GET_VERIFY_CODE,{phone:$scope.registerInfo.phone}).then(function (result) {
          console.log(result);
        alertView.showMessageForDelay(result.data.message,2000);
          $scope.code = result.data.verifyCode;
      }).catch(function (error) {
        alertView.showMessageForDelay(error.data.message,2000);
          console.log(error);
      });

      $scope.codeStatusIsDisable = true;

      var time = 60;
      var timer = $interval(function () {
        $scope.codeStatus = time-- +"秒后重试";

        if (time==0){
          $interval.cancel(timer);
          $scope.codeStatus = "获取验证码";
          $scope.codeStatusIsDisable = false;
        }
      },1000);

    };

    $scope.toRegister = function (info) {

      if ($scope.code == info.verifyCode){

        console.log(md5(sha1(info.password+"secretary")));

        info.password = md5(sha1(info.password+"secretary"));
        HTTPManager.post(HOST+REGISTER,info).then(function (result) {

          if (result.data.code == 2000){
            $scope.registerInfo = {};
            $ionicHistory.goBack();
          }else {
            alertView.showMessageForDelay(result.data.message,2000);
          }

        }).catch(function (error) {
          alertView.showMessageForDelay(error.data.message,2000);
        });

      }else {
        alertView.showMessageForDelay("验证码错误",2000);
      }

    };
  });
