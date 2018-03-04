var http = require('http');
var express = require('express');
var app = express();
 
var server = app.listen(8889, function () {
	console.log('load success!');
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});


 
server.listen(8889);

