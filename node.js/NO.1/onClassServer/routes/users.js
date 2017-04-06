var express = require('express');
var router = express.Router();

var DBManager = require("./DBManager");

var dbManager = new DBManager({
  host:"localhost",
  user:"root",
  password:"",
  database:"mysecretary"
});

router.get("/register",function (req,res) {

  var sql = "INSERT INTO `user`(`username`, `password`, `phone`, `uuid`) VALUES ('xiaoming2','123',119,000002)";
  dbManager.opretation(sql).then(function (result) {
    console.log(result);
    res.send(result);
  }).catch(function (error) {
    console.log(error);
    res.send(error);
  });

});
module.exports = router;















//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// router.get("/login",function (req, res) {
//   //acc:xiaoming
//   //psw:111
//   //?acc=xiaoming&psw=111
//
//   console.log(req.query);
//
//   if (req.query.acc == "xiaoming"&&req.query.psw == "111"){
//     res.send("登录成功");
//   }else {
//     res.send("登录失败");
//   }
// });


