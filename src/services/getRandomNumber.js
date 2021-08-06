const { Logger } = require('../config/logger');
const { RANGE_OF_NUMBERS } = require('../constants/RANGE_OF_NUMBERS');
const { gameModel } = require('../models/gameModel');
const { gameNumberModel } = require('../models/gameNumberModel');
const _ = require('lodash');

const getRandomNumber = async (id) => {
  const game = await gameModel.findOne({
    where: {
      id,
    },
  });

  let numbers = await gameNumberModel.findAll({
    where: {
      gameId: game.id,
    },
  });

  const result = numberGenerator(numbers);

  if (result === false) {
    return false;
  }

  const number = await gameNumberModel.create({
    letter: result.letter,
    value: result.value,
    gameId: game.id,
  });

  return number;
};

/**
 * @param {string[]} exclude
 * @param {gameNumberModel[]} numbers
 * @returns {{letter,value}|false}
 */
const numberGenerator = (numbers, exclude = []) => {
  Logger.info({ numbers, exclude }, 'calling numberGenerator');

  if (exclude.length === 5) {
    return false;
  }

  const allLetters = Object.keys(RANGE_OF_NUMBERS);
  const letters = allLetters.filter((val) => !exclude.includes(val));
  const key = _.random(0, letters.length - 1, false);
  const letter = letters[key];

  exclude.push(letter);

  /**
   * The letter isn't available, generate for another letter.
   */
  if (numbers.length === 15) {
    return numberGenerator(numbers, exclure);
  }

  let value;

  const exists = (search) => {
    return (
      numbers.findIndex((num) => {
        return num.value === search;
      }) !== -1
    );
  };

  do {
    value = randomByLetter(letter);
  } while (exists(value));

  return {
    letter,
    value,
  };
};

/**
 * get random number for a range of the letter
 * @param {string} letter
 * @returns
 */
const randomByLetter = (letter) => {
  const range = RANGE_OF_NUMBERS[letter];
  return _.random(range[0], range[1], false);
};

module.exports = { getRandomNumber, numberGenerator };
