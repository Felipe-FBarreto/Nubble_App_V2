import {TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

export default function Button() {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 40,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      }}>
      <Text bold preset="headingMedium" style={{color: colors.background}}>
        CoffStack
      </Text>
    </TouchableOpacity>
  );
}
