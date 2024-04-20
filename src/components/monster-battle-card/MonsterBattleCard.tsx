import React from 'react';
import { Image } from 'react-native';
import { Card, ProgressBar, Title } from 'react-native-paper';
import styled from '@emotion/native';
import { colors } from '../../constants/colors';
import { Monster } from '../../models/interfaces/monster.interface';

const StyledCard = styled(Card)({
  margin: 10,
  padding: 10,
  alignItems: 'center',
});

const MonsterInfo = styled.View({
  alignItems: 'center',
});

const MonsterName = styled(Title)({
  fontSize: 20,
  fontWeight: 'bold',
});

const StatsLabel = styled(Title)({
  fontSize: 16,
  marginTop: 5,
});

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  return (
    <StyledCard>
      {monster ? (
        <MonsterInfo>
          <Image source={{ uri: monster.imageUrl }} resizeMode="contain" style={{ width: 100, height: 100 }} />
          <MonsterName>{monster.name}</MonsterName>
          <StatsLabel>HP</StatsLabel>
          <ProgressBar progress={monster.hp / 100} color={colors.progressColor} />
          <StatsLabel>Attack</StatsLabel>
          <ProgressBar progress={monster.attack / 100} color={colors.progressColor} />
          <StatsLabel>Defense</StatsLabel>
          <ProgressBar progress={monster.defense / 100} color={colors.progressColor} />
          <StatsLabel>Speed</StatsLabel>
          <ProgressBar progress={monster.speed / 100} color={colors.progressColor} />
        </MonsterInfo>
      ) : (
        <Title>{title}</Title>
      )}
    </StyledCard>
  );
};

export { MonsterBattleCard };
