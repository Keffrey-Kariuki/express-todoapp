const express = require('express');
const bodyParser = require('body-parser');
const db =  require('./config/db')
const setupTodoController = require('./src/controllers/TodoController')

// variable that defines the server
let app = express();

// store todos in an array
let todos = [];

// store ids
let todosId = 1;

// url encoder
var urlEncoder = bodyParser.urlencoded({ extended: false});

// setup express middleware
app.use(express.json());
app.use(express.static('public'));

// connect to db
db.testConnection()

// todo routes
setupTodoController(app, urlEncoder)

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})