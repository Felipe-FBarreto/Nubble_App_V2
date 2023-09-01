import {IconProps} from '@components';

import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenTabProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unFocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unFocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unFocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unFocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unFocused: 'profile',
    },
  },
};
