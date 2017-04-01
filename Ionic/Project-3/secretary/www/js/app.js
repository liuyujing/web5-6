angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
          templateUrl:"templates/recorders.html"
        }
      }
    });

    $stateProvider.state("tabs.write",{
      url:"/write",
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
          templateUrl:"templates/friends.html"
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
          templateUrl:"templates/setting.html"
        }
      }
    });

    $urlRouterProvider.otherwise("/tabs/recorders");
  });
