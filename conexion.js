const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('CRUDjuegos', 'sa', "1234", {
    dialect: "mssql",
    host: 'localhost',
    port: '5555',
})

module.exports = sequelize