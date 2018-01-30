var socket=io();

socket.on('connect',function(){
console.log('connect to server');
});

socket.on('disconnect',function(){
console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
console.log('newMessage',message);

var li=jQuery('<li></li>');
li.text(`${message.from}: ${message.text}`);
jQuery('#messages').append(li);
});

socket.on('welcomeMessage',function(message){
console.log('newMessage',message);

});

socket.on('userJoin',function(message){
console.log('newMessage',message);
});



jQuery('#message-form').on('submit',function(e){
	e.preventDefault();
	
	socket.emit('createMessage',{
	from:'User',
	text:jQuery('[name=message]').val()
},function(data){
	console.log('Got it',data);
});
	
})
