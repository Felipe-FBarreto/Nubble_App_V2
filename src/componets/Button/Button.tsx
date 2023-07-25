import {TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../Text/Text';

export default function Button() {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 40,
        backgroundColor: '#550ab1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      }}>
      <Text bold preset="headingMedium" style={{color: '#fff'}}>
        CoffStack
      </Text>
    </TouchableOpacity>
  );
}
