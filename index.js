'use strict';

var dbs = require("/home/emir/nodeJS/chatserver/database/db.js");

var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(),

socket = socket.listen(server);

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

io.on('connection', function(socket){
  socket.join('some room');
});

server.listen(3000, ()=>{
    console.log('Server started');
});


