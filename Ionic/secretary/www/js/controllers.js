angular.module("starter.controllers",[])
  .controller("homeController",function ($cordovaDatePicker) {

    var options = {
      date: new Date(),
      mode: 'date', // or 'time'
      minDate: new Date() - 10000,
      allowOldDates: true,
      allowFutureDates: false,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#F2F3F4',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#000000'
    };

    document.addEventListener("deviceready", function () {

                              alert("11111");
      $cordovaDatePicker.show(options).then(function(date){
        alert(date);
      });

    }, false);

  });
