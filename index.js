const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

const router = require('./routes.js');


const app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));




// app.get('/', (req, res) =>{
//   res.render('index', {todos: todos});
// });
//
// app.post('/add', (req, res) => {
//   todos.push({task: req.body.newTask, done: false});
//   res.redirect('/');
// });
//
//
// app.post('/completed', (req, res) => {
//   todos.forEach((item, index) => {
//     if (req.body.done === todos[index].task){
//       item.done = true;
//       console.log('clicked', item);
//       console.log('clicked todos', todos);
//     }
//   });
//   res.redirect('/');
// });




router(app);

app.listen(3000);
