import React from 'react';
import {Screen} from '../../../componets/Screen/Screen';
import {Icon} from '../../../componets/Icon/Icon';
import Text from '../../../componets/Text/Text';
import Button from '../../../componets/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

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
