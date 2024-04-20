import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import { Provider } from 'react-redux';
import BattleOfMonsters from './BattleOfMonsters';
import mockFetch from 'jest-fetch-mock';

import monstersData from '../../../server/monsters.json';
import { store } from '../../app/store';

const battleOfMonstersFactory = async () => {
  mockFetch.mockResponse(req => {
    if (req.url.includes('monsters')) {
      return Promise.resolve(JSON.stringify(monstersData.monsters));
    }

    return Promise.reject(new Error('not mapped url'));
  });
  render(
    <Provider store={store}>
      <BattleOfMonsters />
    </Provider>,
  );
  await waitFor(() =>
    expect(screen.getAllByTestId('monsters-card')).toHaveLength(
      monstersData.monsters.length,
    ),
  );
};

describe('BattleOfMonsters', () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
  });

  it('should render the page container', async () => {
    await battleOfMonstersFactory();
    expect(screen.queryByText('Battle of Monsters')).not.toBeNull();
    expect(screen.queryByTestId('start-battle-button')).not.toBeNull();
  });

  it('should enable the start battle button on choose a monster', async () => {
    await battleOfMonstersFactory();
    expect(
      screen.getByTestId('start-battle-button').props.accessibilityState
        .disabled,
    ).toBeTruthy();
    fireEvent(screen.getByTestId('monster-1'), 'press');
    expect(
      screen.getByTestId('start-battle-button').props.accessibilityState
        .disabled,
    ).toBeFalsy();
    fireEvent(screen.getByTestId('monster-1'), 'press');
    expect(
      screen.getByTestId('start-battle-button').props.accessibilityState
        .disabled,
    ).toBeTruthy();
  });

  it('should start fight after click on button', async () => {
    await battleOfMonstersFactory();
    expect(screen.queryByTestId('monster-1')).not.toBeNull();
    fireEvent(screen.getByTestId('monster-1'), 'press');
    fireEvent(screen.getByTestId('start-battle-button'), 'press');
  });
});
