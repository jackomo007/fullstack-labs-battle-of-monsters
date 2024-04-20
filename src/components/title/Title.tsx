import styled from '@emotion/native';
import { Title } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const PageTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  color: ${colors.black};
  line-height: 42px;
  margin-left: 20px;
`;
