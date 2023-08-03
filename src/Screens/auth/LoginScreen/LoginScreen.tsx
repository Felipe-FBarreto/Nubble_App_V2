import React, {useState} from 'react';
import Text from '../../../componets/Text/Text';
import TextInput from '../../../componets/Text/TextInput';
import Button from '../../../componets/Button/Button';
import {Screen} from '../../../componets/Screen/Screen';
import {PasswordInput} from '../../../componets/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useForm, Controller} from 'react-hook-form';
import {Alert} from 'react-native';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
type LoginFormType = {
  email: string;
  password: string;
};
export function LoginScreen({navigation}: ScreenProps) {
  // const [email,setEmail] = useState('')
  // const [password,sePassword] = useState('')

  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
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
      <Controller
        control={control}
        rules={{
          required: 'E-mail obrigatória',
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/,
            message: 'E-mail inválido',
          },
        }}
        name="email"
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite seu e-mail"
            BoxProps={{mb: 's16', mt: 's40'}}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: 'Senha obrigatória',
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: ` Mínimo de oito caracteres${'\n'} Pelo menos uma Letra maiúscula${'\n'} Uma letra minúscula${'\n'} Mm número${'\n'} E um caractere especial`,
          },
        }}
        name="password"
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Senha"
            placeholder="Digite sua senha"
            BoxProps={{mb: 's8'}}
          />
        )}
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
