const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { bingoNumberModel } = require('./bingoNumberModel');

const bingoModel = sequelize.define('bingo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  winner: DataTypes.BOOLEAN,
});

bingoModel.hasMany(bingoNumberModel);

module.exports = { bingoModel };
