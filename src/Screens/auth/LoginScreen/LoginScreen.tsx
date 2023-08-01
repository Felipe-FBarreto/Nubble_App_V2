import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Text from '../../../componets/Text/Text';
import TextInput from '../../../componets/Text/TextInput';
import {Icon} from '../../../componets/Icon/Icon';
import Button from '../../../componets/Button/Button';
import {Screen} from '../../../componets/Screen/Screen';
import {PasswordInput} from '../../../componets/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSingUpScreen() {
    navigation.navigate('SingUpScreen');
  }
  return (
    <Screen>
      <Text mb="s10" bold preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge">Digite seu e-mail e senha para entrar</Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{mb: 's16', mt: 's40'}}
      />
      <PasswordInput
        errorMessage="Mensagem de erro"
        label="Senha"
        placeholder="Digite sua senha"
        BoxProps={{mb: 's8'}}
      />
      <Text preset="paragraphMedium" bold color="primary">
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button
        onPress={navigateToSingUpScreen}
        mt="s12"
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}
