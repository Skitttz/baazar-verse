import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/shared/route';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import LogoHeaderImg from '@/assets/logo-header.svg';
import Image from 'next/image';
import { UserSettings } from '@/components/UserSettings';
import { Navigation } from './Navigation';
import { getUserProfile } from '@/services/server/profile/useProfile';

export default async function Header() {
  const { seller } = await getUserProfile();
  return (
    <header className="py-5 max-w-desktop w-full mx-auto flex justify-between items-center gap-4">
      <Image
        src={LogoHeaderImg}
        width={56}
        height={40}
        alt="Logo Header Image"
      />
      <Navigation />

      <div className="flex items-center space-x-4 lg:space-x-6">
        <Button className="flex items-center gap-2 font-medium" asChild>
          <Link href={APP_ROUTES.PRIVATE.PRODUCT_NEW}>
            <Plus className="w-5 h-5" />
            Novo Produto
          </Link>
        </Button>

        <UserSettings seller={seller} />
      </div>
    </header>
  );
}
