import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Text from './src/componets/Text/Text';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text preset="headingLarge" style={{color: 'red'}}>
          Hello Word
        </Text>
        <Text style={{color: 'orange'}}>Hello Word</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
