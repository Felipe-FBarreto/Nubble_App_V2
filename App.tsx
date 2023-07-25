import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Text from './src/componets/Text/Text';
import Button from './src/componets/Button/Button';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <Text bold>Hello Word</Text>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default App;
