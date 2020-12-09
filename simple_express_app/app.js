var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.send('this is the home page')
});


app.get('/about', function(req, res) {
    res.send('this is the about page')
});

app.listen(3000);