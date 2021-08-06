const { getRandomNumber } = require('../services/getRandomNumber');

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const getRandomNumberHandler = async (req, res) => {
  const game = await getRandomNumber(req.params.id);

  res.json(game);
};

module.exports = { getRandomNumberHandler };
