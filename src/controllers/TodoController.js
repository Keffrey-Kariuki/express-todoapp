const Todo = require('../models/todo');

const setupTodoController = (app, urlEncoder) => {
        // routes for the todos
    app.get('/todos', async (req, res) => {
        /**
         * Retrieves a list of todos from array
         */
        // res.json(todos)

        /**
         * Retrieve a list of todos from the database
         */
        const todoList = await Todo.findAll({
            attributes: ['title', 'id']
        })
        res.json(todoList)
    });

    app.post('/todos/create', urlEncoder, async (req, res) => {

        const name = req.body.name;
        const date = req.body.date;

        /**
         * DATA ADDED TO ARRAY
         */
        // const data  = {
        //     "id": todosId++,
        //     "Title": name,
        //     "Due Date": date
        // }

        // todos.push(data);


        /**
         * DATA ADDED TO DB
         */
        await Todo.create({
            title: name,
            dueDate: date
        })

        res.json({
            "status": "success",
            "message": "Added todo successfully"
        })

    })

    app.put('/todos/update/:id', async (req, res) => {

        //const title = req.params.title
        
        const id = req.params.id;
        const name = req.body.name
        const date = req.body.date

        /**
         * DATA UPDATED ON ARRAY
         */
        // todos = todos.map((value) => {

        //     if(value.Title === title) {
        //         return {
        //             "Title": name,
        //             "Due Date": date
        //         }
        //     }else{
        //         return value
        //     }

        // })


        await Todo.update({
            title: name,
            dueDate: date
        }, {
        where: {
            id: id
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

    // delete todo
    app.delete('/destroy/:id', async (req, res) => {

        /**
         * DELETE USING ARRAY
         */
    //    todos = todos.filter( (value) => value.id != req.params.id )
        await Todo.destroy({
            where: {
                id: req.params.id
            }
        })


    res.json({
        status: 'success',
        message: 'Deleted todo successfully'
    });

    });




    app.get('/', (req, res) => {
        res.send('Welcome to your first server application!')
    });

    app.get('/home', (req, res) => {
        res.send('Welcome to your home application')
    })

}

module.exports = setupTodoController