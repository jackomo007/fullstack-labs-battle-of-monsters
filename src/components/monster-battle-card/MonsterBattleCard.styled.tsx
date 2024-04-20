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
  padding: 10,
  paddingBottom: 25,
  alignItems: 'center',
});

export const StyledInfo = styled(View)({
  display: 'flex',
});

export const StyledName = styled(Title)({
  fontSize: 20,
  fontWeight: 'bold',
});

export const StyledStatsLabel = styled(Title)({
  fontSize: 16,
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
