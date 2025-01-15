'use client';
import { Mail, MoveRight } from 'lucide-react';
import { FormProviderCustom } from '../FormProviderCustom';
import { InputCustom } from '../InputCustom';
import { InputPassword } from '../InputPassword';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { QUERY_PARAMS } from '@/constants/queryParams';
import { ISignInFormData, schemaSignInForm } from '@/validations/signInForm';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { APP_ROUTES } from '@/shared/route';
import { AxiosError } from 'axios';
import { useSignIn } from '@/services/client/signIn/useSignIn';

export default function SignInForm() {
  const params = useSearchParams();
  const email = params?.get(QUERY_PARAMS.EMAIL) || '';
  const { signInUser, isPendingSignUser } = useSignIn();

  const router = useRouter();

  const methods = useForm<ISignInFormData>({
    resolver: zodResolver(schemaSignInForm),
    values: {
      email: email || '',
      password: '',
    },
  });
  const handleSignIn = async (data: ISignInFormData) => {
    try {
      await signInUser(data);
      router.push(APP_ROUTES.PRIVATE.HOME);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message);
    }
  };
  return (
    <FormProviderCustom
      methods={methods}
      onSubmit={methods.handleSubmit(handleSignIn)}
      className="w-full font-poppins"
    >
      <div className="space-y-4 py-12">
        <InputCustom
          label="E-mail"
          id="email"
          placeholder="Seu e-mail cadastrado"
          startIcon={<Mail />}
          className="placeholder:font-light!"
          disabled={isPendingSignUser}
        />

        <InputPassword
          label="Senha"
          id="password"
          placeholder="Sua senha de acesso"
          className=""
          disabled={isPendingSignUser}
        />
      </div>

      <Button
        type="submit"
        className="w-full flex items-center justify-between text-base font-medium h-14 rounded-lg py-0 text-white transform group duration-300"
        size={'lg'}
        disabled={isPendingSignUser}
      >
        {isPendingSignUser ? 'Acessando...' : 'Acessar'}{' '}
        <MoveRight className="transition-transform duration-300 transform group-hover:translate-x-2" />
      </Button>
    </FormProviderCustom>
  );
}
