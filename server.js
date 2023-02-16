const express = require('express');
const bodyParser = require('body-parser');

// variable that defines the server
let app = express();

// store todos in an array
let todos = [];

// url encoder
var urlEncoder = bodyParser.urlencoded({ extended: false});

// setup express middleware
app.use(express.json());
app.use(express.static('public'));

// routes for the todos
app.get('/todos', (req, res) => {
    res.json(todos)
});

app.post('/todos/create', urlEncoder, (req, res) => {

    const name = req.body.name;
    const date = req.body.date;

    const data  = {
        "Title": name,
        "Due Date": date
    }

    todos.push(data);

    res.json({
        "status": "success",
        "message": "Added todo successfully"
    })

})

app.put('/todos/update/:title', (req, res) => {

    const title = req.params.title
    
    const name = req.body.name
    const date = req.body.date

    todos = todos.map((value) => {

        if(value.Title === title) {
            return {
                "Title": name,
                "Due Date": date
            }
        }else{
            return value
        }

    })

    res.json({
        "status": "success",
        "message": "Updated todo successfully"
    })

})

app.get('/create_todo', (req, res) => {
    res.sendFile(__dirname + '/public/views/' + 'index.html');
});




app.get('/', (req, res) => {
    res.send('Welcome to your first server application!')
});

app.get('/home', (req, res) => {
    res.send('Welcome to your home application')
})

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})