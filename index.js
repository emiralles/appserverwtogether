var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
// Routing
app.use(express.static(__dirname));

// var socket = require('socket.io'),
//     http = require('http'),
//     server = http.createServer(),
//
// socket = socket.listen(server);
//
// socket.on('connection',function(connection){
//     console.log('User Connected');
//     connection.on('message',function(msg){
//         socket.emit('message',msg );
//     });
// });
//
// server.listen(3000, ()=>{
//     console.log('Server started');
// });
