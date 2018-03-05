var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
 
var server = app.listen(8889, function () {
	console.log('load success!');
});
app.use(express.static(path.join(__dirname, '/')));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});


 
server.listen(8889);

