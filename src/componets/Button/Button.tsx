import {} from 'react-native';
import React from 'react';
import Text from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';
import {RestyleComponentProps, TouchableOpacityBox} from '../Box/Box';
import {buttonPresets} from './buttonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends RestyleComponentProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export default function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...rest
}: ButtonProps) {
  const {colors} = useAppTheme();

  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      {...buttonPreset.container}
      borderRadius="s16"
      height={50}
      justifyContent="center"
      alignItems="center"
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} size="small" />
      ) : (
        <Text color={buttonPreset.content} bold preset="headingSmall">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
