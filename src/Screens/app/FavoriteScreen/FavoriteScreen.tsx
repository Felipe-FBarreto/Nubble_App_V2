import React from 'react';

import {Screen, Text} from '@components';
import {AppTabStackProps} from '@routes';

export function FavoriteScreen({}: AppTabStackProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge"> Favorite Screen </Text>
    </Screen>
  );
}
