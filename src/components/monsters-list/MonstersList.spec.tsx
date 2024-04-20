import { render, screen, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MonstersList } from './MonstersList';
import monstersData from '../../../server/monsters.json';
import { setSelectedMonster } from '../../reducers/monsters/monsters.actions';

const mockSetSelectedMonster = jest.fn();
jest.mock('../../app/hooks', () => ({
  useAppDispatch: () => mockSetSelectedMonster,
}));

const monstersListFactory = (data = monstersData.monsters) => {
  render(
    <Provider store={store}>
      <MonstersList monsters={data} />
    </Provider>,
  );
};

describe('MonstersList', () => {
  it('should render the monsters list', () => {
    monstersListFactory();
    expect(screen.getAllByTestId('monsters-card')).toHaveLength(
      monstersData.monsters.length,
    );
  });

  it('should render the no monsters available message', () => {
    monstersListFactory([]);
    const noMonstersTitle = screen.queryByText('No monsters available');
    expect(noMonstersTitle).not.toBeNull();
  });

  it('should click on the first monster card', async () => {
    monstersListFactory();
    expect(screen.queryByTestId('monster-1')).not.toBeNull();
    fireEvent(screen.getByTestId('monster-1'), 'press');
    expect(mockSetSelectedMonster).toBeCalledWith(
      setSelectedMonster(monstersData.monsters[0]),
    );
    fireEvent(screen.getByTestId('monster-1'), 'press');
    expect(mockSetSelectedMonster).toBeCalledWith(setSelectedMonster(null));
  });
});
