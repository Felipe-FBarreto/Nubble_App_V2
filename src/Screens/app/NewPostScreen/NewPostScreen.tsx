import React from 'react';

import {Screen, Text} from '@components';
import {AppTabStackProps} from '@routes';

export function NewPostScreen({}: AppTabStackProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">New Post </Text>
    </Screen>
  );
}
