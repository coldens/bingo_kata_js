const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const gameNumberModel = sequelize.define('gameNumber', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  letter: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { gameNumberModel };
