const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const bingoNumberModel = sequelize.define('bingoNumber', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  letter: DataTypes.STRING,
  value: DataTypes.INTEGER,
  check: DataTypes.BOOLEAN,
});

module.exports = { bingoNumberModel };
