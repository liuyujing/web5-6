/**
 * Created by liuyujing on 2017/4/7.
 */

angular.module("starter.HTTPServices",[])

.service("HTTPManager",function ($http,$httpParamSerializerJQLike) {

  this.post = function (url,param) {

    return $http({
      url:url,
      method:"POST",
      headers:{
        "content-type":"application/x-www-form-urlencoded"
      },
      data:$httpParamSerializerJQLike(param)

    });

  };

  this.get = function (url,param) {

    var paramStrings = [];

    for (key in param) {
      paramStrings.push(key+"="+param[key]);
    }

    return $http.get(url+"?"+paramStrings.join("&"));

  };

});

