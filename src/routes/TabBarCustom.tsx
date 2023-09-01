/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  RestyleComponentProps,
  Text,
  TextProps,
  TouchableOpacityBox,
} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {mapScreenTabProps} from './mapScreenTabProps';

export function AppTabCustom({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box {...$boxWrapper} style={[{paddingBottom: bottom}, $shadowProps]}>
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
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
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
            {...$itemWrapper}
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
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabIte.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  marginTop: 's4',
  semiBold: true,
  preset: 'paragraphCaption',
};
const $itemWrapper: RestyleComponentProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};
const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'background',
  flexDirection: 'row',
};
