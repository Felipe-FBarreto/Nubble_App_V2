import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import TextInput, {TextInputProps} from '../../Text/TextInput';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...TextInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({field: {value, onChange}, fieldState}) => (
        <TextInput
          value={value}
          onChangeText={onChange}
          errorMessage={fieldState.error?.message}
          {...TextInputProps}
        />
      )}
    />
  );
}
