const Todo = require('../models/todo');
const Complete = require('../models/complete');
const models = require('../models');

const TodoController = {
  list: function(req, res) {
    models.Todo.findAll().then(function(results) {
      res.render('index', {
        todos: results,
      });
    });
  },

  add: function(req, res) {
    models.Todo.create({
      task: req.body.newTask
    }).then(function(result) {
      res.redirect('/');
    });
  },
  complete: function(req, res) {
    models.Todo.findById(req.params.id).then(function(result) {
      console.log('result is', result);
      console.log(result.completed);

      return result.update({
        completed: !null
      });
    });
    res.redirect('/');
  }






};

module.exports = TodoController;
