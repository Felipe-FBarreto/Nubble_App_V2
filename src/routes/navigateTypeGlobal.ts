import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList, AuthStackParamList} from '@routes';

import {AppTabBottomTabParamList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppTabStackProps<RouteName extends keyof AppTabBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomTabParamList, RouteName>, // era pegar as Rotas inferiores
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'> // ira pegar as rotas em pilhas
  >;
