var socket=io();

socket.on('connect',function(){
console.log('connect to server');

socket.emit('createMessage',{
	from:'bisu',
	text:'Yup,that works for me'
});
});

socket.on('disconnect',function(){
console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
console.log('newMessage',message);
});