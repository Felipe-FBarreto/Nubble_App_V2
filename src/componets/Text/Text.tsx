import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React from 'react';

//font size e font weight

interface TextProps extends RNTextProps {
  preset?: TextVariants; // preset = valores pre definidos
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export default function Text({
  children,
  style,
  bold,
  semiBold,
  italic,
  preset = 'paragraphMedium',
  ...rest
}: TextProps) {
  function getFontFamily(
    preset: TextVariants,
    bold?: boolean,
    italic?: boolean,
    semiBold?: boolean,
  ) {
    if (
      preset === 'headingLarge' ||
      preset === 'headingSmall' ||
      preset === 'headingMedium'
    ) {
      return italic ? $fontFamily.boldItalic : $fontFamily.bold;
    }
    switch (true) {
      case bold && italic:
        return $fontFamily.blackItalic;
      case bold:
        return $fontFamily.bold;
      case semiBold && italic:
        return $fontFamily.mediumItalic;
      case italic:
        return $fontFamily.italic;
      case semiBold:
        return $fontFamily.medium;
      default:
        return $fontFamily.regular;
    }
  }

  const fontFamily = getFontFamily(preset, bold, italic, semiBold);

  return (
    <RNText style={[$fontSizes[preset], style, {fontFamily}]} {...rest}>
      {children}
    </RNText>
  );
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
