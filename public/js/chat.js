var socket=io();


function scrollToBottom(){
	var messages=$('#messages');
	var newMessage=messages.children('li:last-child');
	
	var scrollTop=messages.prop('scrollTop');
	var clientHeight=messages.prop('clientHeight');
	var scrollHeight=messages.prop('scrollHeight');
	var newMessageHeight=newMessage.innerHeight();
	var lastMessageHeight=newMessage.prev().innerHeight();
	console.log(lastMessageHeight);
	console.log(newMessageHeight);
	//console.log(clientHeight);
	
if(scrollTop + clientHeight + newMessageHeight+lastMessageHeight >= scrollHeight){

	messages.scrollTop(scrollHeight);
}
}
socket.on('connect',function(){
console.log('connect to server');
});

socket.on('disconnect',function(){
console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
	var formattedTime=moment(message.createdAt).format('h:mm a');
	var template=$('#message-template').html();
	var html=Mustache.render(template,{
		text:message.text,
		from:message.from,
		createdAt:formattedTime
	});
	$('#messages').append(html);
//console.log('newMessage',message);
/*


var li=jQuery('<li></li>');
li.text(`${message.from}:${formattedTime} ${message.text}`);
jQuery('#messages').append(li);*/
scrollToBottom();
});

socket.on('newLocationMessage',function(message){
	var formattedTime=moment(message.createdAt).format('h:mm a');
	var template=$('#location-message-template').html();
	var html=Mustache.render(template,{
		from:message.from,
		url:message.url,
		createdAt:formattedTime
	});
	$('#messages').append(html);
	//var li=jQuery('<li></li>');
	//var a=jQuery(`<a target="_blank">My current location</a>`);
	//li.text(`${message.from} ${formattedTime}:`);
	//a.attr('href',message.url);
	//li.append(a);
	//jQuery('#messages').append(li);
	scrollToBottom();
});

socket.on('welcomeMessage',function(message){
console.log('newMessage',message);

});

socket.on('userJoin',function(message){
console.log('newMessage',message);
});



jQuery('#message-form').on('submit',function(e){
	e.preventDefault();
	
	var messageTextbox=$('[name=message]');
	socket.emit('createMessage',{
	from:'User',
	text:messageTextbox.val()
},function(){
	messageTextbox.val('');
});
	
});

var locationButton=jQuery('#send-location');
locationButton.on('click',function(){
	if(!navigator.geolocation){
		alert('Geolocation not supported by your browser.');
	}
	
	
	locationButton.attr('disabled','disabled').text('Sending location...');
	navigator.geolocation.getCurrentPosition(function(position){
		locationButton.removeAttr('disabled').text('Send location');
		socket.emit('createLocationMessage',{
			latitude:position.coords.latitude,
			longitude:position.coords.longitude
		});
	},function(){
		locationButton.removeAttr('disabled').text('Send location');
		console.log('Unable to fetch location. ');
	});
});



