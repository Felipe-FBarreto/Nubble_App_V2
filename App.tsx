import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Text from './src/componets/Text/Text';
import Button from './src/componets/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text bold>Hello Word</Text>
          <Button />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
