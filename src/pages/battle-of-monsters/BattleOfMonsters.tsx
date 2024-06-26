import { useEffect } from 'react';
import { TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { PageTitle } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { colors } from '../../constants/colors';
import {
  fetchMonstersData,
  resetBattle,
  startBattle,
} from '../../reducers/monsters/monsters.actions';
import {
  returnResult,
  selectMonsters,
  selectSelectedMonster,
  setComputerMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  PageContainer,
  BattleSection,
  StartBattleButton,
  StartButtonStyles,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(setComputerMonster);
  const resultBattle = useSelector(returnResult);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    dispatch(startBattle());
  };

  const handleRestartBattleClick = () => {
    dispatch(resetBattle());
  };

  const showResults = () => {
    return resultBattle?.tie ? (
      <StartBattleButton
        color={colors.white}
        dark={false}
        testID="restart-battle-button"
        disabled={selectedMonster === null}
        labelStyle={StartButtonStyles as TextStyle}
        uppercase={false}
        onPress={handleRestartBattleClick}>
        Tie, try again!
      </StartBattleButton>
    ) : (
      <WinnerDisplay text={resultBattle?.winner?.name!} />
    );
  };

  return (
    <PageContainer>
      <PageTitle>Battle of Monsters</PageTitle>

      <MonstersList monsters={monsters} />

      <BattleSection horizontal>
        <MonsterBattleCard
          monster={selectedMonster}
          title={selectedMonster?.name || 'Player'}
        />
        <MonsterBattleCard monster={computerMonster} title="Computer" />
      </BattleSection>

      {resultBattle ? (
        showResults()
      ) : (
        <StartBattleButton
          color={colors.white}
          dark={false}
          testID="start-battle-button"
          disabled={selectedMonster === null}
          labelStyle={StartButtonStyles as TextStyle}
          uppercase={false}
          onPress={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
      )}
    </PageContainer>
  );
};

export default BattleOfMonsters;
