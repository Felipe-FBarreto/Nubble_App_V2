import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha inválida'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
