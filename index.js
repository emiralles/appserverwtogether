var express = require(express);
var app = express();

var dbs = require("/home/emir/nodeJS/chatserver/database/db.js");

var server = require('http').server(app);

var socket = require('socket.io')(server);

    //http = require('http'),
    //server = http.createServer(),

app.get('/',function(req,res){
    res.status(200).send("Servidor Listo");
});

//socket = socket.listen(server);

socket.on('connection',function(connection){
    console.log('User Connected');
    connection.on('message',function(msg){
        socket.emit('message',msg );
    });

    socket.on('connection',function(socket){
        var room = dbs.structRoom;
        room.userIdPropiertario = userIDP;
        room.userIdInvitado = userIdI;
        room.room = 'room_'+ userIdI + "_" + "userIdP";
        socket.join(room.room);
    });

    
});


server.listen(3000, function(){
    console.log('Server started');
});


