/**
 * Created by liuyujing on 2017/4/13.
 */

function Chat(server) {
    var io = require('socket.io')(server);

    io.on('connection', function (socket) {
            console.log("socket已连接");
        socket.on('message',function(to, msg){
            console.log("message:",to, msg);

        });
        });
}




module.exports = Chat;
