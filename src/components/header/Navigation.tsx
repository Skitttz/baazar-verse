'use client';

import { ChartNoAxesCombined, ShoppingBag } from 'lucide-react';
import { NavButtonStyle } from './styles';
import { APP_ROUTES } from '@/shared/route';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        className={`${NavButtonStyle.primary} ${
          pathname === APP_ROUTES.PRIVATE.HOME ? NavButtonStyle.current : ''
        }`}
        href={APP_ROUTES.PRIVATE.HOME}
      >
        <ChartNoAxesCombined className="w-5 h-5" />
        Dashboard
      </Link>
      <Link
        className={`${NavButtonStyle.primary} ${
          pathname === APP_ROUTES.PRIVATE.PRODUCTS ? NavButtonStyle.current : ''
        }`}
        href={APP_ROUTES.PRIVATE.PRODUCTS}
      >
        <ShoppingBag className="w-5 h-5" />
        Produtos
      </Link>
    </nav>
  );
}
