import React from 'react';

import {Text, Button, Screen, Icon} from '@components';
import {AuthScreenProps} from '@routes';

export function SucessScreen({
  route,
  navigation,
}: AuthScreenProps<'SucessScreen'>) {
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
