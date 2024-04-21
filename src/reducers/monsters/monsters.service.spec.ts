import { MonsterService } from './monsters.service';
import monstersData from '../../../server/monsters.json';

describe('Monsters Service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });

  it('should successfully retrieve battle results', async () => {
    const mockResult = { winner: monstersData.monsters[0], tie: false };

    const battleData = {
      selectedMonsterId: monstersData.monsters[0].id,
      opponentMonsterId: monstersData.monsters[1].id,
    };

    jest.spyOn(MonsterService, 'resultBattle').mockResolvedValue(mockResult);

    const response = await MonsterService.resultBattle(battleData);
    expect(response).toEqual(mockResult);
  });
});
