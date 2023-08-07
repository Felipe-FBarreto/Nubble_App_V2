import React from 'react';
import {Screen} from '../../../componets/Screen/Screen';
import Text from '../../../componets/Text/Text';
import Button from '../../../componets/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useNavigationResetSucess} from '../../../hooks/useNavigationResetSucess';
import {FormTextInput} from '../../../componets/Form/FormTextInput/FormTextInput';
import {useForm} from 'react-hook-form';
type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassawordScreen'
>;
type ForgotPasswordProps = {
  email: string;
};

export function ForgotPasswordScreen({}: ScreenProps) {
  const {control, handleSubmit, formState} = useForm<ForgotPasswordProps>({
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
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/,
            message: 'E-mail inválido',
          },
        }}
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
