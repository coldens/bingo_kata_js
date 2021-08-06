const { Sequelize } = require('sequelize');
const { Config } = require('./Config');
const { Logger } = require('./logger');

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: Config.get('DB_USER'),
  password: Config.get('DB_PASSWORD'),
  database: Config.get('DB_DATABASE'),
  host: Config.get('DB_HOST'),
  port: Config.get('DB_PORT'),
  logging: (msg) => Logger.info(msg),
});

module.exports = { sequelize };
