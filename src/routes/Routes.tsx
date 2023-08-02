import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SingUpScreen} from '../Screens/auth/SingUpScreen/SingUpScreen';
import {LoginScreen} from '../Screens/auth/LoginScreen/LoginScreen';
import {SucessScreen} from '../Screens/auth/SucessScreen/SucessScreen';
import {IconProps} from '../componets/Icon/Icon';

export type RootStackParamList = {
  LoginScreen: undefined;
  SingUpScreen: undefined;
  SucessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
        <Stack.Screen name="SucessScreen" component={SucessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
