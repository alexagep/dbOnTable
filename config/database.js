const Sequelize = require('sequelize')

<<<<<<< HEAD
module.exports = new Sequelize('crudtest', 'ali', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
=======
module.exports = new Sequelize('crudtest', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    // port: "8889",
    // connectionLimit: 10,
    // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
>>>>>>> bc8cbc4 (initial commit)
});