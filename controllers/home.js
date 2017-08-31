const Todo = require('../models/todo');
const models = require('../models');

const TodoController = {
  list: function(req, res) {
    models.Todo.findAll({where: {completed: null}}).then(function(results) {
      res.render('index', {
        todos: results,               //lists all todos that have not been completed (completed: null)
      });
    });
  },

  form: function(req, res){
    const todoId = req.params.id;
      models.Todo.findById(todoId).then(function(result){  //finds the todo by its id then
        res.render('form', {model: result});        //renders edit form with task's title (task) filled in
      });
    },


  add: function(req, res) {
    models.Todo.create({
      task: req.body.newTask.trim()             //creates (build then save) a new task
    }).then(function(result) {
      res.redirect('/');
    });
  },

  edit: function(req, res){
    const todoId = req.params.id;
    const task = req.body.editTask.trim();

    models.Todo.update({              //edits a task by its id
      task: task
    }, {
      where: {
        id : todoId
      }
    }).then(function(result){
      res.redirect('/');
    });

  },

  complete: function(req, res) {
    const todoId = req.params.id;

    models.Todo.update({              //marks tasks as completed (completed:true) when complete button clicked
      completed: true
    }, {
      where: {
      id : todoId
    }
  }).then(function(result){
      res.redirect('/');
    });
  }






};

module.exports = TodoController;
