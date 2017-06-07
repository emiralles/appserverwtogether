var express = require('express');
var app = express();
var server = require('http').Server(app);
var socket = require('socket.io')(server);
var bodyparser = require('body-parser');
var dbs = require('../database/db.js');

    //http = require('http'),
    //server = http.createServer(),
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
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


