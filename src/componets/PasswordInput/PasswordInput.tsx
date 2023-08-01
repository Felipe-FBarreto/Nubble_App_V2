import { Pressable } from 'react-native'
import React, { useState } from 'react'
import TextInput, { TextInputProps } from '../Text/TextInput'
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon'
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon'
import { Icon } from '../Icon/Icon'

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry,setIsSecureTextEntry] = useState(true)

  function toggleSecureTextEntry(){
    setIsSecureTextEntry(prev => !prev)
  }

  return (
    <TextInput
    BoxProps={{mb: 's20'}}
    secureTextEntry={isSecureTextEntry}
    {...props}
    RightComponent={<Icon onPress={toggleSecureTextEntry} name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}/>}
  />
  )
}