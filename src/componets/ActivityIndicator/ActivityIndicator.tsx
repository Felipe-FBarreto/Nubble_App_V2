import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface PropsActivityIndicator extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: PropsActivityIndicator) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} size="small" />;
}
