const { bingoModel } = require('../../src/models/bingoModel');
const { bingoNumberModel } = require('../../src/models/bingoNumberModel');
const { getBingoCard } = require('../../src/services/getBingoCard');

describe('getBingoCard (unit)', () => {
  it('Should be generate a new bingo card', async () => {
    const bingo = {
      id: 1,
      gameId: 1,
      numbers: [],
    };

    jest.spyOn(bingoModel, 'create').mockResolvedValue(bingo);
    jest.spyOn(bingoNumberModel, 'create').mockImplementation((value) => {
      const number = bingoNumberModel.build(value);
      bingo.numbers.push(number);
      return Promise.resolve(number);
    });
    jest.spyOn(bingoModel, 'findOne').mockResolvedValue(bingo);

    await getBingoCard(1);

    expect(bingo.numbers.length).toBe(24);
  });
});
