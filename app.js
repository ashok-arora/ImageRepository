var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Welcome to ImageRepository!');
});

// use port 5000 unless there exists a preconfigured port
var port = process.env.PORT || 5000;

app.listen(port);