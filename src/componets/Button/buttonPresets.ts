import {ThemeColors} from '../../theme/theme';
import {RestyleComponentProps} from '../Box/Box';
import {ButtonPreset} from './Button';

interface ButtonUI {
  container: RestyleComponentProps;
  content: ThemeColors;
}

interface buttonType {
  default: ButtonUI;
  disabled: ButtonUI;
}

export const buttonPresets: Record<ButtonPreset, buttonType> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
