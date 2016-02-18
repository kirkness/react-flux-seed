var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) { res.sendFile(__dirname + '/app/index.html') });
app.listen(3000, function() { console.log('Rota Tinder is Running') });
 