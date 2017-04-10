/**
 * Created by liuyujing on 2017/4/7.
 */

angular.module("starter.HTTPServices",[])

.service("HTTPManager",function ($http) {

  this.post = function (url,param) {

    return $http({
      url:url,
      method:"POST",
      data:param,
      headers:{
        "content-type":"application/x-www-form-urlencoded"
      },
      transformRequest:function (data) {

        var body = [];
        for (key in data) {

          var value = data[key];
          var item = key+"="+encodeURIComponent(value);
          body.push(item);
        }

        return body.join("&");

      }

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

