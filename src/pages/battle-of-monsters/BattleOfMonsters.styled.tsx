import styled from '@emotion/native';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../constants/colors';

// Styled Components
export const PageContainer = styled(View)`
  display: flex;
  flex-direction: column;
  max-width: 820px;
`;

export const BattleSection = styled(ScrollView)`
  padding-left: 20px;
  margin-top: 25px;
`;

interface ButtonProps {
  disabled: boolean;
}

export const StartBattleButton = styled(Button)`
  background-color: ${({ disabled }: ButtonProps) =>
    disabled ? colors.lightGreen : colors.darkGreen};
  border-radius: 5px;
  padding: 8px;
  margin: 0 20px;
`;

// Paper Styles
export const StartButtonStyles = {
  fontSize: 18,
  color: colors.white,
  fontFamily: 'Roboto',
  fontWeight: 'normal',
};
