import React from 'react';

import {Screen, Text} from '@components';
import {AppTabStackProps} from '@routes';

export function MyProfileScreen({}: AppTabStackProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">My Profile </Text>
    </Screen>
  );
}
