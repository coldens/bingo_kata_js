const { Sequelize } = require('sequelize');
const { Logger } = require('./logger');

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: 'jose1992',
  database: 'bingo_kata_js',
  host: 'localhost',
  port: 3306,
  logging: (msg) => Logger.info(msg),
});

module.exports = { sequelize };
