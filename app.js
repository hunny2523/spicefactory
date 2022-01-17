

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
app.use('/scripts', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});