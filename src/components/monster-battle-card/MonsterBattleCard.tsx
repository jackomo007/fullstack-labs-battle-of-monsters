import React from 'react';
import { colors } from '../../constants/colors';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  StyledImage,
  StyledInfo,
  StyledName,
  StyledProgressBar,
  StyledStatsLabel,
  StyledCard,
  StyledEmptyCard,
  StyledTitle,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

/**
 * ? React memo is implemented to upgrade the performance
 */
const StatItem = React.memo(
  ({ label, value }: { label: string; value: number }) => (
    <>
      <StyledStatsLabel>{label}</StyledStatsLabel>
      <StyledProgressBar progress={value / 100} color={colors.progressColor} />
    </>
  ),
);

const MonsterBattleCard = React.memo(({ monster, title }: MonsterCardProps) => {
  return (
    <StyledCard>
      {monster ? (
        <StyledInfo>
          <StyledImage
            source={{ uri: monster.imageUrl }}
            resizeMode="contain"
          />
          <StyledName>{monster.name}</StyledName>
          <StatItem label="HP" value={monster.hp} />
          <StatItem label="Attack" value={monster.attack} />
          <StatItem label="Defense" value={monster.defense} />
          <StatItem label="Speed" value={monster.speed} />
        </StyledInfo>
      ) : (
        <StyledEmptyCard>
          <StyledTitle>{title}</StyledTitle>
        </StyledEmptyCard>
      )}
    </StyledCard>
  );
});

export { MonsterBattleCard };
