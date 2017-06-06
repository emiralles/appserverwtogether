var firebase = require("firebase-admin");
var serviceAccount = require('../wtogether-4855e-firebase-adminsdk-44scg-23a03dea32.json');

var structUser = {
    userId: '',
    username: '',
    email: '',
    room: ''
};

var structMessage = {
  userIdSend:'',
  userIdTo:'',
  room:'',
  message: ''
};

var structRoom = {
  userIdPropietario:'',
  userIdInvitado:'',
  room:''
};

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://wtogether-4855e.firebaseio.com"
});

var db = firebase.database();


function writeUser(userId, name, email, room) {
  db.ref('users/' + userId).set({
    userId: userId,
    username: name,
    email: email,
    room: room
  });
};


function readUser(userId){
  var users = db.ref('users/');
  
  users.orderByChild('userId').equalTo(userId).on('value',function(snapshot){
    structUser.userId = snapshot.userId,
    structUser.username = snapshot.username,
    structUser.email = snapshot.email,
    structUser.room = snapshot.room

  });

};



module.exports="dbs";

