import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {LoginScreen} from './src/Screens/auth/LoginScreen/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SingUpScreen} from './src/Screens/auth/SingUpScreen/SingUpScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SingUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
