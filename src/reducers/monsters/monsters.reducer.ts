import { Monster } from './../../models/interfaces/monster.interface';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchMonstersData,
  setComputerMonster,
  setSelectedMonster,
} from './monsters.actions';

/**
 * ! 1 Create the new state property
 */

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computerMonster: null,
};

export const monstersReducer = createReducer(initialState, builder => {
  builder.addCase(fetchMonstersData.pending, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  /**
   * ! 3 Create a function to choose a random opponent
   */

  /**
   * Selects a random opponent monster from available monsters excluding the selected one.
   * @param {Array} monsters - The full list of monsters.
   * @param {Object} selectedMonster - The currently selected monster.
   * @returns {Object} The randomly selected opponent monster.
   */
  const selectRandomOpponent = ({
    list,
    selectedMonster,
  }: {
    list: Monster[];
    selectedMonster: string;
  }) => {
    const otherMonsters = list.filter(
      monster => monster.id !== selectedMonster,
    );

    // Ensure there is at least one other monster to select from
    if (otherMonsters.length === 0) {
      throw new Error('No available monsters to select as an opponent.');
    }

    const randomIndex = Math.floor(Math.random() * otherMonsters.length);
    return otherMonsters[randomIndex];
  };

  /**
   * ! 2 Add the case to return the computer opponent
   */
  builder.addCase(setComputerMonster, (state, action) => {
    // Ensure the selected monster is valid
    if (!action.payload?.id) {
      throw new Error('Selected monster is invalid.');
    }

    try {
      const opponent = selectRandomOpponent({
        list: state.monsters,
        selectedMonster: action?.payload?.id,
      });

      return {
        ...state,
        computerMonster: opponent,
      };
    } catch (error) {
      console.error('Failed to set opponent monster:', error);
      return state; // Optionally return unchanged state or handle error differently
    }
  });
});
