var express = require('express');
var http = require('http');
var app = express();
var request = require('request');
var httpServer = http.createServer(app);
httpServer.listen(1000);
app.use('/', express.static(__dirname + '/'));
app.set('views', __dirname + '/');
app.get('/', function(req, res){
  res.sendfile('final.html');
});
app.post('/FindwetherbyGPS', function(req, res) {
    var lat=req.param('lat');
	var lon=req.param('lon');	
	request('http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&cnt=16&units=metric&APPID=4f9d1588d5c590d2c6c0627713e68c71', function (error, response, body) {
    if (!error && response.statusCode == 200) {
       res.end(body);
 }
})
});
app.post('/Findwether', function(req, res) {
    var cityname=req.param('name');
	request('http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityname+'&cnt=16&units=metric&APPID=4f9d1588d5c590d2c6c0627713e68c71', function (error, response, body) {
    if (!error && response.statusCode == 200) {
       res.end(body);
 }
})
});
