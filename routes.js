const express = require('express');



const TodoController = require('./controllers/home');

module.exports = function(app){

  const todoRouter = express.Router();

  todoRouter.get('/', TodoController.list);
  todoRouter.post('/add', TodoController.add);
  todoRouter.get('/edit/:id', TodoController.form);
  todoRouter.post('/edits/:id', TodoController.edit);

  todoRouter.post('/completed/:id', TodoController.complete);





app.use('/', todoRouter);
};
