const express = require('express');
const { getRandomNumberHandler } = require('./getRandomNumberHandler');
const { startGameHandler } = require('./startGameHandler');
const router = express.Router();

router.post('/start-game', startGameHandler);
router.get('/get-number/:id', getRandomNumberHandler);

module.exports = { router };
