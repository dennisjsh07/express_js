// creating a product model using sequelize...

// import sequelize core...
const Sequelize = require('sequelize');

// creating sequelize environment...
const sequelize = require('../util/database');

// defining a product...
const Product = sequelize.define('product',{
  id: {
    type: Sequelize.INTEGER,
    auroIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;