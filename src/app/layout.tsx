import type { Metadata } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';
import { IChildren } from '@/interfaces/generic';
import '@/styles/global.css';
import { Toaster } from 'sonner';

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Baazar Verse',
    default: 'Baazar Verse',
  },
};

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
