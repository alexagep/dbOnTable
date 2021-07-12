const Sequelize = require('sequelize')

module.exports = new Sequelize('crudtest', 'ali', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});