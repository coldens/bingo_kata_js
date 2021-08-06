const express = require('express');
const { getBingoCardHandler } = require('./getBingoCardHandler');
const { getRandomNumberHandler } = require('./getRandomNumberHandler');
const { startGameHandler } = require('./startGameHandler');
const router = express.Router();

router.post('/start-game', startGameHandler);
router.get('/get-number/:id', getRandomNumberHandler);
router.post('/bingo/:gameId/generate-card', getBingoCardHandler);

module.exports = { router };
