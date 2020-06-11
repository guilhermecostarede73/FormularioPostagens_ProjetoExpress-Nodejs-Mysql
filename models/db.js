//Conexão com banco de dados mysql
const Sequelize = require('sequelize');
const sequelize = new Sequelize('showDatabases', 'usuarioBD', 'senhaBD', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}