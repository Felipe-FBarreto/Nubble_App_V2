import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {Box, BoxProps} from '../Box/Box';
import Text, {$fontFamily, $fontSizes} from './Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
}
export default function TextInput({
  label,
  errorMessage,
  RightComponent,
  ...rest
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    padding: 's16',
    flexDirection: 'row',
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            style={$textInputStyles}
            {...rest}
            placeholderTextColor={colors.gray2}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text color="error" preset="paragraphSmall" bold>
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  );
}

const $textInputStyles: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
  flex: 1,
};
