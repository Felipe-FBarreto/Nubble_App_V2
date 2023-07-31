import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Text from './src/componets/Text/Text';
import Button from './src/componets/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/componets/Box/Box';
import {Icon} from './src/componets/Icon/Icon';
import TextInput from './src/componets/Text/TextInput';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mt="s40" mb="s10" bold preset="headingLarge">
            Olá!
          </Text>
          <Text preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            BoxProps={{mb: 's16', mt: 's40'}}
          />
          <TextInput
            RightComponent={<Icon name="eyeOff" size={20} />}
            errorMessage="Mensagem de erro"
            label="Senha"
            placeholder="Digite sua senha"
            BoxProps={{mb: 's8'}}
          />
          <Text preset="paragraphMedium" bold color="primary">
            Esqueci minha senha
          </Text>
          <Button mt="s48" title="Entrar" />
          <Button mt="s12" title="Criar uma conta" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
