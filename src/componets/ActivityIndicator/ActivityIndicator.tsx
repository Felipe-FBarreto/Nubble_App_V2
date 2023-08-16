import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';

interface PropsActivityIndicator extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: PropsActivityIndicator) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} size="small" />;
}
