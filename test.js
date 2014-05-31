//pure node server
/*var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/planain'
	});

	res.write('Working!');
	res.end();
}).listen(1234);

//node server with connect
var connect = require('connect'),
	http = require('http'),
	app = connect()
	.use(connect.logger('dev'))
	.use(connect.static('public'))
	.use(function(req, res) {
		res.end('hello world\n');
	});

http.createServer(app).listen(3000);


//connect with util...
var connect = require('connect'),
    util = require('util');

var interceptorFunction = function(request, response, next) {
    console.log(util.format('Request for %s with method %s',
        request.url, request.method));
    next();
};

var app = connect()
    // .use('/log', interceptorFunction)
    .use(interceptorFunction)
    .use(function onRequest(request, response) {
        response.end('Hello from Connect 2!');
    }).listen(3001);


//node with express
var express = require('express'),
	app = express(),
	path = require('path');
	customer = require('./routes/customer');

app.get('/', function (request, response) {
    response.send('Welcome to Express AD5');
});

app.get('/customer/:id', customer.view);

app.listen(12000);
*/