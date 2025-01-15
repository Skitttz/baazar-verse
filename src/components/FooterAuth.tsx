import { MoveRight } from 'lucide-react';
import { LinkButton } from './LinkButton';

export interface IFooterAuthProps {
  title: string;
  textButton: string;
  href: string;
}

export const FooterAuth = ({ textButton, title, href }: IFooterAuthProps) => {
  return (
    <div className="mt-auto w-full">
      <span className="text-gray-500 text-base font-medium">{title}</span>
      <LinkButton
        href={href ?? ''}
        button={{
          type: 'button',
          size: 'lg',
          className:
            'mt-4 w-full flex items-center justify-between text-base font-semibold h-14 transform group duration-300',
          variant: 'outline-default',
        }}
      >
        {textButton}
        <MoveRight className="transition-transform duration-300 transform group-hover:translate-x-2" />
      </LinkButton>
    </div>
  );
};
