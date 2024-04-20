import styled from '@emotion/native';
import { Card, ProgressBar, Title } from 'react-native-paper';
import { colors } from '../../constants/colors';
import { View, Image } from 'react-native';

/**
 * All the styles was moved here
 * The names where created with
 * the same prefix Styled
 * and implemented in a same way
 * to keep a pattern
 */

export const StyledProgressBar = styled(ProgressBar)({
  backgroundColor: colors.progressBarBackground,
  borderRadius: 4,
  height: 7,
});

export const StyledCard = styled(Card)({
  margin: 10,
  marginBottom: 25,
  marginLeft: 5,
  padding: 10,
  paddingBottom: 25,
  alignItems: 'center',
  border: '0.5px solid #dddddd',
  boxShadow: '-2px 3px 10px 0 rgba(0, 0, 0, 0.25)',
});

export const StyledInfo = styled(View)({
  display: 'flex',
});

export const StyledName = styled(Title)({
  fontSize: 22,
});

export const StyledStatsLabel = styled(Title)({
  fontSize: 12,
  marginTop: 5,
});

export const StyledImage = styled(Image)({
  borderRadius: 7,
  height: 148,
  width: 235,
});

export const StyledTitle = styled(Title)({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontSize: 36,
  color: colors.black,
  padding: 0,
  paddingTop: 5,
});

export const StyledEmptyCard = styled(View)({
  display: 'flex',
  width: 255,
  height: 340,
  justifyContent: 'center',
  alignItems: 'center',
});
