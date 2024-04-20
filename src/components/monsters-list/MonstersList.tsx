import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  setSelectedMonster,
  setComputerMonster,
} from '../../reducers/monsters/monsters.actions';
import {
  MonsterCardContainer,
  Img,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
} from './MonstersList.styled';

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null,
  );

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));
    /**
     * * Set the computer monster
     */

    dispatch(setComputerMonster(!value ? null : monster));
  };

  return (
    <>
      <ListTitle>
        {monsters.length > 0 ? 'Select your monster' : 'No monsters available'}
      </ListTitle>

      <MonstersSection horizontal testID="monsters-list-section">
        {monsters.map(monster => (
          <MonsterCardContainer
            testID="monsters-card"
            key={monster.id}
            onPress={() => handleMonsterClick(monster)}>
            <MonsterCard
              selected={monster.id === selectedMonsterId}
              testID={monster.id}>
              <Img source={{ uri: monster.imageUrl }} />
              <MonsterName>{monster.name}</MonsterName>
            </MonsterCard>
          </MonsterCardContainer>
        ))}
      </MonstersSection>
    </>
  );
};

export { MonstersList };
