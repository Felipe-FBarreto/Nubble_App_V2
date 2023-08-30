import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SingUpScreen,
  SucessScreen,
} from '@screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SingUpScreen: undefined;
  SucessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPassawordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
      <Stack.Screen name="SucessScreen" component={SucessScreen} />
      <Stack.Screen
        name="ForgotPassawordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}
