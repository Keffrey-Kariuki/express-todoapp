const { Sequelize, DataTypes } = require('sequelize');

// create connection to db
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'todos.sqlite3'
});


const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('SQLITE connected')
    }catch(error){
        console.log(error)
    }
}

// todos table
const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    dueDate: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

module.exports = {
    sequelize,
    testConnection,
    models: {
        Todo
    }
}



