import React from "react";
import {z} from 'zod'



const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const message = ` Mínimo de 8 caracteres${'\n'} • 1 letra maiúscula${'\n'} • 1 letra minúscula${'\n'} • 1 número${'\n'} • 1 caractere especial`

export const singUpSchema = z.object({
  username: z.string().regex(/^@[a-zA-Z]{6,}$/,'Deve começar com @'),
  fullName: z.string().min(5, 'nome muito curto').max(50,'nome muito grande').transform(value => {
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }),
  email: z.string().email('email inválido'),
  password: z.string().regex(regexPassword,message),
})

export type SingUpSchema = z.infer<typeof singUpSchema>