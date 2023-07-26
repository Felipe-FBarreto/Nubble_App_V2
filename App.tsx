import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Text from './src/componets/Text/Text';
import Button from './src/componets/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/componets/Box/Box';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" mt="s32" color="carrotSecondary" bold>
            Hello Word
          </Text>
          <Box mt="s24" mb="s24">
            <Button
              backgroundColor="primary"
              borderRadius="s16"
              title="CoffStack"
            />
          </Box>
          <Button
            backgroundColor="primary"
            borderRadius="s16"
            loading
            title="loading"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
