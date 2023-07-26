import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

interface PropsActivityIndicator extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: PropsActivityIndicator) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} size="small" />;
}
