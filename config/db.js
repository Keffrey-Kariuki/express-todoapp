const { Sequelize } = require('sequelize');

// create connection to db
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db/todos.sqlite3'
});


const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('SQLITE connected')
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    sequelize,
    testConnection,
}



