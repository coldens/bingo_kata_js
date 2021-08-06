const { getBingoCard } = require('../services/getBingoCard');

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const getBingoCardHandler = async (req, res) => {
  const card = await getBingoCard(req.params.gameId);

  res.json(card);
};

module.exports = { getBingoCardHandler };
