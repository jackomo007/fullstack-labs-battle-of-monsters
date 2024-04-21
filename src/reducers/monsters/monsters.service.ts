import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  fetch(`${API_URL}/monsters`).then(response => response.json());

// Define the type for the function parameters to ensure type safety.
type BattleIds = {
  selectedMonsterId: string;
  opponentMonsterId: string;
};

// Create a utility function to handle API requests which can be reused across the application.
const postJson = async (url: string, body: object): Promise<any> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${await response.text()}`);
  }

  return response.json();
};

const resultBattle = async ({
  selectedMonsterId,
  opponentMonsterId,
}: BattleIds): Promise<any> => {
  const apiUrl = `${API_URL}/battle`;
  const battleData = {
    monster1Id: selectedMonsterId,
    monster2Id: opponentMonsterId,
  };

  return postJson(apiUrl, battleData);
};

export const MonsterService = {
  getAll,
  resultBattle,
};
