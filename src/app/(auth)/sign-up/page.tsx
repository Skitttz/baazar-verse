import { FooterAuth } from '@/components/FooterAuth';
import SignUpForm from '@/components/signUp/signUpForm';
import { APP_ROUTES } from '@/shared/route';

export default function SignUpPage() {
  return (
    <div className="h-full items-start justify-start w-full flex flex-col gap-6">
      <div className="w-full">
        <h1 className="font-bold text-2xl">Crie sua conta</h1>
        <p className="font-medium text-base text-gray-500 ">
          Informe os seus dados pessoais e de acesso
        </p>
      </div>
      <div className="w-full space-y-16">
        <SignUpForm />
        <FooterAuth
          title="Já tem uma conta?"
          textButton="Acessar"
          href={APP_ROUTES.PUBLIC.SIGN_IN}
        />
      </div>
    </div>
  );
}
