const express = require('express');
const { startGameHandler } = require('./startGameController');
const router = express.Router();

router.post('/start-game', startGameHandler);

module.exports = { router };
