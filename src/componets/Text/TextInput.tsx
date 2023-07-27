import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import Text from './Text';

interface TextInputProps extends RNTextInputProps {
  label: string;
}
export default function TextInput({label, ...rest}: TextInputProps) {
  return (
    <Box>
      <Text preset="paragraphMedium" mb="s4">
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput {...rest} />
      </Box>
    </Box>
  );
}

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  borderColor: 'gray4',
  borderRadius: 's12',
  padding: 's16',
  height: 50,
};
