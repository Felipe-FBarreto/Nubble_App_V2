import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Text, FormTextInput, Button, Screen} from '@components';
import {useNavigationResetSucess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {forgotSchema, ForgotSchema} from './forgotSchema';

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPassawordScreen'>) {
  const {control, handleSubmit, formState} = useForm<ForgotSchema>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {reset} = useNavigationResetSucess();
  function forgotPassword() {
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
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
      <FormTextInput
        control={control}
        autoCapitalize="none"
        name="email"
        label="E-mail"
        placeholder="Digite seue-mail"
        BoxProps={{mb: 's20', mt: 's32'}}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(forgotPassword)}
        mt="s48"
        title="Recuperar senha"
      />
    </Screen>
  );
}
