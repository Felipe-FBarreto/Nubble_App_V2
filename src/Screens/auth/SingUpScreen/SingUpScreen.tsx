import React from 'react';
import {Screen} from '../../../componets/Screen/Screen';
import Text from '../../../componets/Text/Text';
import TextInput from '../../../componets/Text/TextInput';
import {EyeOffIcon} from '../../../assets/icons/EyeOffIcon';
import Button from '../../../componets/Button/Button';
import {PasswordInput} from '../../../componets/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useNavigationResetSucess} from '../../../hooks/useNavigationResetSucess';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>;

export function SingUpScreen({navigation}: ScreenProps) {
  const {reset} = useNavigationResetSucess();
  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'primary',
      },
    });
  }

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
      <PasswordInput label="Senha" placeholder="Digite sua senha" />

      <Button onPress={submitForm} mt="s48" title="Criar minha conta" />
    </Screen>
  );
}
