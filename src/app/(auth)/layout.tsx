import { IChildren } from '@/interfaces/generic';
import { APP_ROUTES } from '@/shared/route';
import LayerAuthImage from '@assets/layer-auth.svg';
import LogoImage from '@assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function RootAuthLayout({ children }: Readonly<IChildren>) {
  return (
    <div className="grid grid-cols-2 max-w-desktop mx-auto px-4 py-6 min-h-screen gap-8">
      <div className="flex flex-col justify-between">
        <Link href={APP_ROUTES.PUBLIC.SIGN_IN}>
          <Image
            src={LogoImage}
            width={267}
            height={68}
            alt="Logo Baazar Verse"
            className="w-[267px] h-[68px]"
          />
        </Link>
        <Image src={LayerAuthImage} alt="" className="my-auto block" />
      </div>

      <div className="my-auto bg-white rounded-3xl px-16 py-20 max-w-[560px] w-full ml-auto min-h-[720px] h-full">
        {children}
      </div>
    </div>
  );
}
