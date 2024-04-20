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

/**
 * *The styles were migrate to the styles file
 */

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  return (
    <StyledCard>
      {monster ? (
        <StyledInfo>
          <StyledImage
            source={{ uri: monster.imageUrl }}
            resizeMode="contain"
          />
          <StyledName>{monster.name}</StyledName>
          <StyledStatsLabel>HP</StyledStatsLabel>
          <StyledProgressBar
            progress={monster.hp / 100}
            color={colors.progressColor}
          />
          <StyledStatsLabel>Attack</StyledStatsLabel>
          <StyledProgressBar
            progress={monster.attack / 100}
            color={colors.progressColor}
          />
          <StyledStatsLabel>Defense</StyledStatsLabel>
          <StyledProgressBar
            progress={monster.defense / 100}
            color={colors.progressColor}
          />
          <StyledStatsLabel>Speed</StyledStatsLabel>
          <StyledProgressBar
            progress={monster.speed / 100}
            color={colors.progressColor}
          />
        </StyledInfo>
      ) : (
        <StyledEmptyCard>
          <StyledTitle>{title}</StyledTitle>
        </StyledEmptyCard>
      )}
    </StyledCard>
  );
};

export { MonsterBattleCard };
