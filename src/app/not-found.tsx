import { APP_ROUTES } from '@/shared/route';
import { Link } from 'lucide-react';

export default function NotFoundDefaultPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link
          to={APP_ROUTES.PUBLIC.SIGN_IN}
          className="text-sky-500 dark:text-sky-400"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
