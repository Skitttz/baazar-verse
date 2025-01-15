'use client';
import { APP_ROUTES } from '@/shared/route';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const ButtonSignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      router.push(APP_ROUTES.PUBLIC.SIGN_IN);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };
  return (
    <button onClick={handleSignOut} className="flex items-center px-2">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Sair</span>
    </button>
  );
};
