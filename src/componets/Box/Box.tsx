import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type RestyleComponentProps = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;
// podemos dizer que nesse type estamos pegando as props que o nosso component customizado do restye e passando para elas atraves dos generics o seu thema , e extendemos com nosso touchableOpacityProps(nesse caso mas poderia ser outro), para ter as propriedades do botão , então esse type vai definir que o nosso componente customizado tera essa essas propriedades

export const TouchableOpacityBox = createRestyleComponent<
  RestyleComponentProps, // tipagem das propriedades
  Theme // o tema
>(
  [backgroundColor, spacing, layout, border, spacingShorthand], // propriedades dos nosso componente customizado
  TouchableOpacity, // quem ira ser o componente, e que ira receber essas propriedades
);
