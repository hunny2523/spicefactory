var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
// app.use('/scripts', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/')));
// app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/popper', express.static(path.join(__dirname + '/node_modules/popper.js/')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/')));
app.use('/font-awesome', express.static(path.join(__dirname, '/node_modules/font-awesome/')));
app.use('/bootstrap-social', express.static(path.join(__dirname, '/node_modules/bootstrap-social/')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});