const express = require('express');

// variable that defines the server
let app = express();

app.get('/', (req, res) => {
    res.send('Welcome to your first server application!')
});

app.get('/home', (req, res) => {
    res.send('Welcome to your home application')
})

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})