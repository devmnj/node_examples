 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');

 var urlencodeparser = bodyParser.urlencoded({ extended: false });

 mongoose.connect('mongodb+srv://admin:text123@cluster0.cqnll.mongodb.net/app_data?retryWrites=true&w=majority');

 //Schema
 todoSchema = new mongoose.Schema({ item: String });
 //Model
 var Todo = mongoose.model('Todo', todoSchema);


 module.exports = function(app) {

     app.get('/', function(req, res) {

         Todo.find({}, function(err, data) {
             if (err) throw err;
             res.render('index', { todos: data });

         });


     });

     app.post('/', urlencodeparser, function(req, res) {
         var newTodo = Todo({ item: req.body.todo_content }).save(function(err, data) {
             if (err) throw err;

             console.log('Item saved');
             res.redirect('/');
         });




     });
     app.get('/todo/:id', function(req, res) {
         console.log(req.params.id);
         Todo.findByIdAndDelete(req.params.id, function(err) {
             if (err) console.log(err);
             console.log("Successful deletion");
             res.redirect('/');
         });
     });
 };