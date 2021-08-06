const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { gameNumberModel } = require('./gameNumberModel');

const gameModel = sequelize.define('game', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

gameModel.hasMany(gameNumberModel);

module.exports = { gameModel };
