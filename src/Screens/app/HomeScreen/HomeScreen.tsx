import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabStackProps} from '@routes';

export function HomeScreen({navigation}: AppTabStackProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge" bold>
        Home Screen
      </Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
