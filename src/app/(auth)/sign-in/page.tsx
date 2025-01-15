import { FooterAuth } from '@/components/FooterAuth';
import { APP_ROUTES } from '@/shared/route';
import SignInForm from '@components/signIn/signInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default async function SignInPage() {
  return (
    <>
      <div className="h-full items-start justify-start w-full flex flex-col">
        <div className="w-full">
          <h1 className="font-bold text-2xl">Acesse sua conta</h1>
          <p className="font-medium text-base text-gray-500 ">
            Informe seu e-mail e senha para entrar
          </p>
        </div>
        <SignInForm />
        <FooterAuth
          title="Ainda não tem uma conta?"
          textButton="Cadastrar"
          href={APP_ROUTES.PUBLIC.SIGN_UP}
        />
      </div>
    </>
  );
}
