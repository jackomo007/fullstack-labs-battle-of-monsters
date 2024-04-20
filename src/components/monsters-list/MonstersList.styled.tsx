import styled from '@emotion/native';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const ListTitle = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-top: 20px;
  margin-left: 20px;
  color: ${colors.black};
`;

export const MonsterCardContainer = styled(TouchableOpacity)`
  margin: 0px;
`;

interface MonsterCardProps {
  selected: boolean;
}

export const MonsterCard = styled(Card)<MonsterCardProps>`
  background: ${colors.white};
  border: ${({ selected }: MonsterCardProps) =>
    selected ? `1px solid ${colors.black}` : 'none'};
  border-radius: 7px;
  padding: 7px;
  margin-top: 16px;
  margin-right: 8px;
  margin-bottom: 16px;
  width: 150px;
  height: 140px;
  elevation: 5;
`;

export const Img = styled(Image)`
  border-radius: 7px,
  width: 136px,
  height: 100px
`;

export const MonsterName = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.black};
  padding: 7px 0;
`;

export const MonstersSection = styled(ScrollView)`
  margin-top: 0px;
  display: flex;
  padding-left: 20px;
`;
