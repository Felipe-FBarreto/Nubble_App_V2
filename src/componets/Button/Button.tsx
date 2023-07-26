import {ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, RestyleComponentProps, TouchableOpacityBox} from '../Box/Box';

interface ButtonProps extends RestyleComponentProps {
  title: string;
  loading?: boolean;
}

export default function Button({title, loading, ...rest}: ButtonProps) {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      justifyContent="center"
      alignItems="center"
      {...rest}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text color="primaryContrast" bold preset="headingMedium">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
