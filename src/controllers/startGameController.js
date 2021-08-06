const { startGameService } = require('../services/startGameService');

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const startGameHandler = async (req, res) => {
  const game = await startGameService();
  res.json(game);
};

module.exports = { startGameHandler };
