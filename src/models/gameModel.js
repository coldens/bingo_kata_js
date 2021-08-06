const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { bingoModel } = require('./bingoModel');
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
gameModel.hasMany(bingoModel);

module.exports = { gameModel };
