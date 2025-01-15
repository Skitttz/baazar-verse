import { Metadata } from 'next';
import { IDetailsProductPageProps } from './types';

export const metadata: Metadata = {
  title: 'Detalhes Produto',
};

export default function DetailsProductPage({
  params,
}: IDetailsProductPageProps) {
  const { productId } = params;
  return <div>DetailsProduct ProductId:{`${productId}`}</div>;
}
