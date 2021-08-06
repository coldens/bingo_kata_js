const { startGameService } = require('../../src/services/startGameService');
const { gameModel } = require('../../src/models/gameModel');

describe('startGameService (unit)', () => {
  it('Should service create a new Game Model', async () => {
    const mock = {
      save: jest.fn(),
    };

    const spy = jest.spyOn(gameModel, 'build').mockReturnValue(mock);
    const model = await startGameService();

    expect(spy).toBeCalled();
    expect(mock.save).toBeCalled();
    expect(model).toMatchObject(mock);
  });
});
