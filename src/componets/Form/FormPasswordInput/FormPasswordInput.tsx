import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput, TextInputProps} from '@components';
export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  ...passwordProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
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
