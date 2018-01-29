const path=require('path');
const http=require('http');
const express=require('express');
const publicPath=path.join(__dirname,'../public');
const socketIO=require('socket.io');


var app=express();
var port=process.env.PORT || 3000; 
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('New user connected');
	
	socket.emit('newMessage',{
		from:'bisu',
		text:'See you then',
		createAt:123123
	});
	
	socket.on('createMessage',(message)=>{
		console.log('createmessage',message);
	});
	socket.on('disconnect',()=>{
	console.log('User was disconnected');
});
});


server.listen(port,()=>{
	console.log(`Server is up on ${port}`);
});
