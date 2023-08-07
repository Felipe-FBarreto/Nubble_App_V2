import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {PasswordInput} from '../../PasswordInput/PasswordInput';
import {TextInputProps} from '../../Text/TextInput';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  ...passwordProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      rules={{
        required: 'Senha obrigatória',
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: ` Mínimo de 8 caracteres${'\n'} • 1 letra maiúscula${'\n'} • 1 letra minúscula${'\n'} • 1 número${'\n'} • 1 caractere especial`,
        },
      }}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...passwordProps}
        />
      )}
    />
  );
}
