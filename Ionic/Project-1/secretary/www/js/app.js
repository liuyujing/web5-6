
angular.module('app', ['ionic',"app.controller"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state("tabs",{
    url:"/tabs",
    abstract:true,
    templateUrl:"templates/tabs.html"
  });
  $stateProvider.state("tabs.recoderlist",{
    url:"/recoderlist",
    views:{
      "tab-recoder":{
        templateUrl:"templates/recoderHomeView.html"
      }
    }
  });
  $stateProvider.state("tabs.recoder",{
    url:"/recoder",
    views:{
      "tab-recoder":{
        templateUrl:"templates/reocderView.html"
      }
    }
  });
  $stateProvider.state("tabs.friend",{
    url:"/friend",
    views:{
      "tab-friend":{
        templateUrl:"templates/friendView.html"
      }
    }
  });
  $stateProvider.state("tabs.circle",{
    url:"/circle",
    views:{
      "tab-circle":{
        templateUrl:"templates/circleView.html"
      }
    }
  });
  $stateProvider.state("tabs.setting",{
    url:"/setting",
    views:{
      "tab-setting":{
        templateUrl:"templates/settingView.html"
      }
    }
  });

  $urlRouterProvider.otherwise('/tabs/recoderlist');
});
