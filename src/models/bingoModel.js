const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { gameNumberModel } = require('./gameNumberModel');

const bingoModel = sequelize.define('bingoModel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

bingoModel.hasMany(gameNumberModel);

module.exports = { bingoModel };
