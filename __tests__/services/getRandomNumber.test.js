const { gameModel } = require('../../src/models/gameModel');
const { gameNumberModel } = require('../../src/models/gameNumberModel');
const { getRandomNumber } = require('../../src/services/getRandomNumber');

describe('getRandomNumber (unit)', () => {
  it('Should be generate a new number', async () => {
    const game = {
      id: 1,
    };
    const numbers = [];

    jest.spyOn(gameModel, 'create').mockResolvedValue(game);
    jest.spyOn(gameNumberModel, 'findAll').mockResolvedValue(numbers);
    jest.spyOn(gameNumberModel, 'create').mockImplementation((value) => {
      const number = gameNumberModel.build(value);
      numbers.push(number);
      return Promise.resolve(number);
    });

    await getRandomNumber(game.id);

    expect(numbers.length).toBeGreaterThan(0);
  });
});
