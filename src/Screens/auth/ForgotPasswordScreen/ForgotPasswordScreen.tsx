import React from 'react';
import {Screen} from '../../../componets/Screen/Screen';
import Text from '../../../componets/Text/Text';
import TextInput from '../../../componets/Text/TextInput';
import Button from '../../../componets/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassawordScreen'
>;
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  function forgotPassword() {
    navigation.navigate('SucessScreen', {
      title: `Enviamos as instruções para seu ${'\n'}e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Esqueci minha senha</Text>
      <Text mt="s16" preset="paragraphLarge">
        Digite seu e-email e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        BoxProps={{mt: 's32'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button onPress={forgotPassword} mt="s48" title="Recuperar senha" />
    </Screen>
  );
}
