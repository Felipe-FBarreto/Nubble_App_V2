import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" bold>
        Setting Screen
      </Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {screen: 'NewPostScreen'})
        }
      />
      <Button
        title="Favorite"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {screen: 'FavoriteScreen'})
        }
      />
    </Screen>
  );
}
