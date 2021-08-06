const { gameModel } = require('../models/gameModel');

const startGameService = async () => {
  const game = gameModel.build();

  await game.save();

  return game;
};

module.exports = { startGameService };
