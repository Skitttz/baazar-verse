import Link from 'next/link';
import { Button, ButtonProps } from './ui/button';

export interface ILinkButtonProps {
  href: string;
  link?: Omit<React.ComponentProps<typeof Link>, 'href'>;
  button: ButtonProps;
  children: React.ReactNode;
}

export const LinkButton = ({
  href,
  button,
  link,
  children,
}: ILinkButtonProps) => {
  return (
    <Link href={href} {...link} scroll={false}>
      <Button {...button}>{children}</Button>
    </Link>
  );
};
