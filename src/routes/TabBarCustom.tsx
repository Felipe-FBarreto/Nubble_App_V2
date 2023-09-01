/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {mapScreenTabProps} from './mapScreenTabProps';

export function AppTabCustom({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Box flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const tabIte =
          mapScreenTabProps[route.name as keyof AppTabBottomTabParamList];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, padding: 10}}>
            <Icon
              name={isFocused ? tabIte.icon.focused : tabIte.icon.unFocused}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              preset="paragraphCaption"
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabIte.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
