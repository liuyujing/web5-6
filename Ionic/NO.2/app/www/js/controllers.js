angular.module('starter.controllers', [])

  .controller('tabController', function($scope,$ionicTabsDelegate) {
    $scope.changeIndex = function(index) {
      alert(index);
      $ionicTabsDelegate.select(index);

      if (index==1){
        console.log($ionicTabsDelegate.$getByHandle("my-tabs"));
        $ionicTabsDelegate.$getByHandle("my-tabs")[0].remove();
      }
    };


  })
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
