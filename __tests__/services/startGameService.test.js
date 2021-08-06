const { startGameService } = require('../../src/services/startGameService');
const { gameModel } = require('../../src/models/gameModel');

describe('startGameService (unit)', () => {
  it('Should service create a new Game Model', async () => {
    const mock = jest.spyOn(gameModel, 'build').mockReturnValue({
      save: jest.fn(),
    });

    const model = await startGameService();
  });
});
