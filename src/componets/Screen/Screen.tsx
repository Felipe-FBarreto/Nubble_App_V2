/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Text} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {Icon} from '../Icon/Icon';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {goBack} = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          style={{paddingTop: top, paddingBottom: bottom}}
          paddingHorizontal="s24">
          {canGoBack && (
            <TouchableOpacityBox onPress={goBack}>
              <Box mb="s24" flexDirection="row" alignItems="center">
                <Icon color="primary" name="arrowLeft" />
                <Text preset="paragraphMedium" semiBold ml="s8">
                  Voltar
                </Text>
              </Box>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
