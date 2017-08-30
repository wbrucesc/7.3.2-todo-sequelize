const express = require('express');



const HomeController = require('./controllers/home');

module.exports = function(app){
const homeRouter = express.Router();

homeRouter.get('/', HomeController.list);
homeRouter.post('/add', HomeController.add);
homeRouter.post('/completed/:id', HomeController.complete); 






app.use('/', homeRouter);
};
