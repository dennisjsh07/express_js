const Sequelize = require('sequelize');

// craering an instance...
const sequelize = new Sequelize('node-complete','root','8884434443d@',{
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;