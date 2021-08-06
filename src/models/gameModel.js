const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const gameModel = sequelize.define('game', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = { gameModel };
