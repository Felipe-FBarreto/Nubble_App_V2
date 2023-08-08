import React from 'react';
import {Screen} from '../../../componets/Screen/Screen';
import Text from '../../../componets/Text/Text';
import Button from '../../../componets/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useNavigationResetSucess} from '../../../hooks/useNavigationResetSucess';
import {useForm, Control, Controller} from 'react-hook-form';
import {FormTextInput} from '../../../componets/Form/FormTextInput/FormTextInput';
import {FormPasswordInput} from '../../../componets/Form/FormPasswordInput/FormPasswordInput';
import {SingUpSchema, singUpSchema} from './singUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>;

export function SingUpScreen({}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SingUpSchema>({
    resolver: zodResolver(singUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
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
      <FormTextInput
        control={control}
        name="username"
        autoCapitalize="none"
        label="UserName"
        placeholder="@"
        BoxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        BoxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seue-mail"
        autoCapitalize="none"
        BoxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        mt="s48"
        title="Criar minha conta"
      />
    </Screen>
  );
}
