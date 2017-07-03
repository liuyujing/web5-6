/**
 * Created by liuyujing on 2017/4/7.
 */


//接口相关

//主机地址
const HOST = "http://localhost:3000";

//注册
REGISTER = "/users/register";
//获取验证码
GET_VERIFY_CODE = "/users/verifyCode";
//登录
LOGIN = "/users/login";
//查询用户
SEARCH_FRIEND = "/users/searchAllUsers";





//添加记录
ADD_RECODER = "/recoder/addRecoder";
//查询记录
SEARCH_RECODER = "/recoder/searchRecoder";
//删除记录
DELETE_RECODER = "/recoder/deleteRecoder";
//查询垃圾箱记录
SEARCH_TRASH_RECODER = "/recoder/searchRemovedRecoder";
//从垃圾箱 还原单条数据
RESTORE_RECODER = "/recoder/restoreRecoder";
CLEAR_RECODER = "/recoder/clearRecoder";
CLEAR_ALL_RECODER = "/recoder/clearAllOfTrash";


//登录状态的key
IS_LOGIN = "isLogin";
USER_NAME = "username";
USER_ID = "userID";

