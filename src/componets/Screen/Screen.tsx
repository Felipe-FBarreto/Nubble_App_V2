import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import Text from '../Text/Text';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack = false}: ScreenProps) {
  const {top} = useAppSafeArea();
  return (
    <Box style={{top}} paddingHorizontal="s24">
      {canGoBack && (
        <Box mb="s24" flexDirection="row" alignItems="center">
          <Icon color="primary" name="arrowLeft" />
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
