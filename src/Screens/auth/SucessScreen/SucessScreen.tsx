import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes';
import {Text, Button, Screen, Icon} from '@components';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SucessScreen'>;

export function SucessScreen({route, navigation}: ScreenProps) {
  function goBack() {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button onPress={goBack} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
