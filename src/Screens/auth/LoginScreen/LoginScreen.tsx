import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  function submitForm({email, password}: LoginSchema) {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
  }
  function navigateToSingUpScreen() {
    navigation.navigate('SingUpScreen');
  }
  function navigateForgotPassaword() {
    navigation.navigate('ForgotPassawordScreen');
  }

  return (
    <Screen>
      <Text mb="s10" bold preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge">Digite seu e-mail e senha para entrar</Text>
      <FormTextInput
        control={control}
        autoCapitalize="none"
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{mb: 's16', mt: 's40'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Text
        onPress={navigateForgotPassaword}
        preset="paragraphMedium"
        bold
        color="primary">
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        mt="s48"
        title="Entrar"
      />
      <Button
        onPress={navigateToSingUpScreen}
        mt="s12"
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}
