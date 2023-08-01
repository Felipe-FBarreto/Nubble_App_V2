import React from 'react';
import {Screen} from '../../../componets/Screen/Screen';
import Text from '../../../componets/Text/Text';
import TextInput from '../../../componets/Text/TextInput';
import {EyeOffIcon} from '../../../assets/icons/EyeOffIcon';
import Button from '../../../componets/Button/Button';
import { PasswordInput } from '../../../componets/PasswordInput/PasswordInput';

export function SingUpScreen() {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold mb="s32">
        Criar uma conta
      </Text>
      <TextInput BoxProps={{mb: 's20'}} label="Seu username" placeholder="@" />
      <TextInput
        BoxProps={{mb: 's20'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />
      <TextInput
        BoxProps={{mb: 's20'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordInput label='Senha' placeholder='Digite sua senha'/>

      <Button mt="s48" title="Criar minha conta" />
    </Screen>
  );
}
