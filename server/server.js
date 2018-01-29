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
	
	
	socket.on('createMessage',(message)=>{
		console.log('createmessage',message);
		io.emit('newMessage',{
		from:message.from,
		text:message.text,
		createAt:new Date().getTime()
		});
	});
	socket.on('disconnect',()=>{
	console.log('User was disconnected');
});
});


server.listen(port,()=>{
	console.log(`Server is up on ${port}`);
});
