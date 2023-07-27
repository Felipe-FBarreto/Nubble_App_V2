import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Text from './src/componets/Text/Text';
import Button from './src/componets/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/componets/Box/Box';
import {Icon} from './src/componets/Icon/Icon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" mt="s32" color="carrotSecondary" bold>
            Hello Word
          </Text>
          <Box mt="s24" mb="s24">
            <Button disabled title="Primary" />
          </Box>
          <Button disabled loading preset="outline" mb="s24" title="Outline" />
          <Button loading title="loading" />
          <Icon name="eyeOff" size={70} color="error" />
          <Icon name="eyeOn" size={50} color="carrotSecondary" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
