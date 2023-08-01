import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SingUpScreen} from '../Screens/auth/SingUpScreen/SingUpScreen';
import {LoginScreen} from '../Screens/auth/LoginScreen/LoginScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SingUpScreen: undefined;
  // TODO: SucessScreen: title, icon , paragraph
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
