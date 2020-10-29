var experess = require('express');
var path = require('path');
var todoController = require('./Controllers/todoController');
var app = experess();
app.set('view engine', 'ejs');
app.use(experess.static(__dirname + '/public'));
todoController(app);
app.listen(3000);