angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.HTTPServices'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {

        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

    //设置 iOS android tabs 定位在底部
    $ionicConfigProvider.tabs.position("bottom");

    $stateProvider.state("tabs",{
      url:"/tabs",
      abstract:true,
      templateUrl:"templates/tabs.html",
      controller:"tabController"
    });

    $stateProvider.state("tabs.recorders",{
      url:"/recorders",
      views:{
        "tab-recorders":{
          templateUrl:"templates/recorders.html",
          controller:"recoderController"
        }
      }
    });

    $stateProvider.state("tabs.write",{
      //录入信息页面的type 001
      //进入详情页面 传下标
      url:"/write/:type",
      views:{
        "tab-recorders":{
          templateUrl:"templates/write.html",
          controller:"RecoderWriteController"
        }
      }
    });


    $stateProvider.state("tabs.friends",{
      url:"/friends",
      views:{
        "tab-friends":{
          templateUrl:"templates/friends.html",
          controller:"friendsController"
        }
      }
    });

    $stateProvider.state("tabs.searchFriends",{
      url:"/searchFriends",
      views:{
        "tab-friends":{
          templateUrl:"templates/searchFriend.html",
          controller:"searchFriendController"
        }
      }
    });

    $stateProvider.state("tabs.circle",{
      url:"/circle",
      views:{
        "tab-circle":{
          templateUrl:"templates/cricle.html"
        }
      }
    });

    $stateProvider.state("tabs.setting",{
      url:"/setting",
      views:{
        "tab-setting":{
          templateUrl:"templates/setting.html",
          controller:"settingController"
        }
      }
    });

    $stateProvider.state("tabs.login",{
      url:"/login",
      views:{
        "tab-setting":{
          templateUrl:"templates/login.html",
          controller:"loginController"
        }
      }
    });
    $stateProvider.state("tabs.register",{
      url:"/register",
      views:{
        "tab-setting":{
          templateUrl:"templates/register.html",
          controller:"registerController"
        }
      }
    });
    $stateProvider.state("tabs.trash",{
      url:"/trash",
      views:{
        "tab-setting":{
          templateUrl:"templates/trashBox.html",
          controller:"trashBoxController"
        }
      }
    });

    $urlRouterProvider.otherwise("/tabs/recorders");
  });
