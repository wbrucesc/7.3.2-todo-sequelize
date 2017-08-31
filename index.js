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






router(app);

app.listen(3000);
