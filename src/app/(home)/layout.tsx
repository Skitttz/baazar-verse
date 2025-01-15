import { IChildren } from '@/interfaces/generic';
import Header from '@/components/header/Header';

export default function RootAuth({ children }: IChildren) {
  return (
    <>
      <div className="border-1 border-b-[#F5EAEA] mb-12 bg-white">
        <Header />
      </div>
      <div className="max-w-desktop w-full mx-auto">{children}</div>
    </>
  );
}
