import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from '../../services/monsters.service';
import { RootState } from '../../app/store';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);

export const startBattle = createAsyncThunk<
  { winner: Monster; tie: boolean },
  void,
  { state: RootState }
>('monsters/startBattle', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const { selectedMonster, computerMonster } = state.monsters;

  if (!selectedMonster || !computerMonster) {
    return rejectWithValue(
      'Please select the monster before starting the battle',
    );
  }

  try {
    const battleResult = await MonsterService.resultBattle({
      selectedMonsterId: selectedMonster.id,
      opponentMonsterId: computerMonster.id,
    });

    // Assuming the service returns the correct battle result structure
    // If not, you may need to construct this structure based on service response
    return {
      winner: battleResult.winner, // Make sure the service returns this structure
      tie: battleResult.tie,
    };
  } catch (error) {
    return rejectWithValue('Failed to complete the battle');
  }
});

export const resetBattle = createAction('monsters/resetBattle');
