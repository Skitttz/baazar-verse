'use client';
import { QUERY_PARAMS } from '@/constants/queryParams';
import { useSignUp } from '@/services/client/signUp/useSignUp';
import { APP_ROUTES } from '@/shared/route';
import { phoneMask } from '@/utils/masks';
import { ISignUpFormData, schemaSignUpForm } from '@/validations/signUpForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MoveRight, Phone, User } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { AttachmentFile } from '../AttachmentFile';
import { FormProviderCustom } from '../FormProviderCustom';
import { InputCustom } from '../InputCustom';
import { InputPassword } from '../InputPassword';
import { Button } from '../ui/button';

export default function SignUpForm() {
  const params = useSearchParams();
  const email = params.get(QUERY_PARAMS.EMAIL);
  const phone = params.get(QUERY_PARAMS.PHONE);
  const name = params.get(QUERY_PARAMS.NAME);
  const { isPendingSignUser, SignUpUser } = useSignUp();
  const router = useRouter();

  const initialValuesForm: ISignUpFormData = {
    email: '',
    phone: '',
    name: '',
    password: '',
    passwordConfirmation: '',
    avatarId: '',
    fileAvatar: null,
  };

  const methods = useForm<ISignUpFormData>({
    resolver: zodResolver(schemaSignUpForm),
    values: {
      ...initialValuesForm,
      email: email || '',
      phone: phone || '',
      name: name || '',
    },
  });

  const handleSignUp = async (data: ISignUpFormData) => {
    try {
      const response = await SignUpUser(data);
      toast.success(`Vendedor cadastrado com sucesso!`, {
        action: {
          label: 'Login',
          onClick: () =>
            router.push(
              `${APP_ROUTES.PUBLIC.SIGN_IN}?${QUERY_PARAMS.EMAIL}=${response.seller.email}`,
            ),
        },
      });

      methods.reset({ ...initialValuesForm });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : `Ops..! Aconteceu um erro tente novamente mais tarde.`;
      toast.error(errorMessage);
    }
  };

  return (
    <FormProviderCustom
      methods={methods}
      onSubmit={methods.handleSubmit(handleSignUp)}
      className="w-full"
    >
      <fieldset>
        <legend className="gray-500 text-lg font-semibold mb-5">Perfil</legend>

        <AttachmentFile
          id="fileAvatar"
          className="mb-4"
          classNameLabel="h-32"
          disabled={isPendingSignUser}
        />

        <InputCustom
          label="Nome"
          id="name"
          placeholder="Seu nome completo"
          startIcon={<User />}
          className="mb-4"
          disabled={isPendingSignUser}
        />

        <InputCustom
          label="Telefone"
          id="phone"
          placeholder="(00) 00000-0000"
          startIcon={<Phone />}
          className="mb-4"
          mask={phoneMask}
          minLength={15}
          maxLength={15}
          disabled={isPendingSignUser}
        />
      </fieldset>

      <fieldset>
        <legend className="gray-500 text-lg font-semibold my-5">Acesso</legend>
        <InputCustom
          label="E-mail"
          id="email"
          placeholder="Seu e-mail de acesso"
          startIcon={<Mail />}
          className="mb-4"
          disabled={isPendingSignUser}
        />

        <InputPassword
          label="Senha"
          id="password"
          placeholder="Senha de acesso"
          className="mb-4"
          disabled={isPendingSignUser}
        />

        <InputPassword
          label="Confirmar Senha"
          id="passwordConfirmation"
          placeholder="Confirme a senha"
          className="mb-4"
          disabled={isPendingSignUser}
        />
      </fieldset>

      <Button
        type="submit"
        className="mt-4 w-full flex items-center justify-between text-sm font-bold transform group duration-300 h-14"
        size={'lg'}
        disabled={isPendingSignUser}
      >
        {isPendingSignUser ? 'Cadastrando...' : 'Cadastrar'}{' '}
        <MoveRight className="transition-transform duration-300 transform group-hover:translate-x-2" />
      </Button>
    </FormProviderCustom>
  );
}
