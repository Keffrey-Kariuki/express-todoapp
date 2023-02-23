// import sequelize object
const { sequelize } = require('../../config/db');
const { DataTypes } = require('sequelize');

// todos table
const Todo = sequelize.define('todo', {
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

// setting up tables
Todo.sync()

module.exports = Todo