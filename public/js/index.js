var socket=io();

socket.on('connect',function(){
console.log('connect to server');
});

socket.on('disconnect',function(){
console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
console.log('newMessage',message);
});

socket.on('welcomeMessage',function(message){
console.log('newMessage',message);
});

socket.on('userJoin',function(message){
console.log('newMessage',message);
});