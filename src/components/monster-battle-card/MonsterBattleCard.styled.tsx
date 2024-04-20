import styled from '@emotion/native';
import { Card, Title,  ProgressBar as PaperProgressBar } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card)`
  padding: 13px 11px;
  width: 252px;
  height: 341px;
  background: ${colors.white};
  border-radius: 7px;
  border: 0.5px solid #dddddd;
  flex-direction: column;
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 5;
`;

export const BattleMonsterTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin: auto;
  color: ${colors.black};
`;

export const ProgressBar = styled(PaperProgressBar)`
  background-color: ${colors.progressBarBackground};
  border-radius: 4px;
  height: 7px
`;
