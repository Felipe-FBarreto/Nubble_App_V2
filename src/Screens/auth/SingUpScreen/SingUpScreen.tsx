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
import {useForm, Control, Controller} from 'react-hook-form';
import {FormTextInput} from '../../../componets/Form/FormTextInput/FormTextInput';
import {FormPasswordInput} from '../../../componets/Form/FormPasswordInput/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>;
type SingUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};
export function SingUpScreen({}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SingUpFormType>({
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
        rules={{
          required: 'Username obrigatório',
          pattern: {
            value: /^@[a-zA-Z]{6,}$/,
            message: `Seu username deve começa com @${'\n'} E ter no minimo de 6 letras minúsculas`,
          },
        }}
      />
      <FormTextInput
        control={control}
        rules={{
          required: 'Digite seu nome completo',
          pattern: {
            value: /^[A-Za-zÀ-ÿ'´`-]{3,}(?: [A-Za-zÀ-ÿ'´`-]{3,})+$/,
            message: 'Digite seu nome completo',
          },
        }}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        BoxProps={{mb: 's20'}}
      />

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
