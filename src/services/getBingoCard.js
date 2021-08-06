const { RANGE_OF_NUMBERS } = require('../constants/RANGE_OF_NUMBERS');
const { bingoModel } = require('../models/bingoModel');
const _ = require('lodash');
const { bingoNumberModel } = require('../models/bingoNumberModel');
const { Logger } = require('../config/logger');

const getBingoCard = async (gameId) => {
  const bingo = await bingoModel.create({ gameId });
  const card = generateCard();

  Logger.info({ card }, 'card generated');

  await Promise.all(
    generateCard().map(async (column) => {
      for (const value of column.value) {
        await bingoNumberModel.create({
          bingoId: bingo.id,
          letter: column.letter,
          value,
          check: false,
        });
      }
    }),
  );

  return bingoModel.findOne({
    where: { id: bingo.id },
    include: bingoNumberModel,
  });
};

const generateCard = () => {
  return [
    { letter: 'B', value: generateColumn('B') },
    { letter: 'I', value: generateColumn('I') },
    { letter: 'N', value: generateColumn('N') },
    { letter: 'G', value: generateColumn('G') },
    { letter: 'O', value: generateColumn('O') },
  ];
};

const generateColumn = (letter) => {
  const min = RANGE_OF_NUMBERS[letter][0];
  const max = RANGE_OF_NUMBERS[letter][1];

  let result = [];

  do {
    result.push(_.random(min, max, false));
    result = _.uniq(result);
  } while (result.length < 5);

  if (letter === 'N') {
    result.splice(2, 1);
  }

  return result;
};

module.exports = { getBingoCard };
