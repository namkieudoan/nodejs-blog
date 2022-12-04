const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db')

//connect DB
db.connect()

const app = express();
const port = 3000;


//static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

//template engine
app.engine('hbs', engine({
  extname: '.hbs',

}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

// route(app);
route(app);